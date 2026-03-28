# Stage 1: Build the Vite application
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 (y 443 si usas SSL)
EXPOSE 80

# Ejecuta NGINX
CMD ["nginx", "-g", "daemon off;"]
