import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const btnAsesor = document.getElementById('btn-asesor')
  
  if (btnAsesor) {
    btnAsesor.addEventListener('click', () => {
      // For now just an alert to demonstrate interaction
      alert('¡Excelente decisión! Un asesor de ciberseguridad se pondrá en contacto pronto. (Aquí abriremos un modal limpio)');
    })
  }

  // Smooth scroll logic for nav
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
           behavior: 'smooth'
        });
      }
    });
  });

  // Sticky Glass Navbar Logic
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
