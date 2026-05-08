// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.main-navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Counter animation for stats
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
  }, 16);
}

// Intersection Observer for counters
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(counter => observer.observe(counter));
}

// Gallery lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function () {
    const imgSrc = this.querySelector('img').src;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,0.92);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999; cursor: pointer; animation: fadeIn 0.3s ease;
    `;
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.cssText = 'max-width: 90vw; max-height: 90vh; border-radius: 8px; object-fit: contain;';
    const close = document.createElement('button');
    close.innerHTML = '&times;';
    close.style.cssText = `
      position: absolute; top: 20px; right: 30px; background: none;
      border: none; color: white; font-size: 2.5rem; cursor: pointer;
      line-height: 1; transition: color 0.2s;
    `;
    close.onmouseover = () => close.style.color = '#e87722';
    close.onmouseout = () => close.style.color = 'white';
    overlay.appendChild(img);
    overlay.appendChild(close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target === close) overlay.remove();
    });
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    overlay.addEventListener('remove', () => { document.body.style.overflow = ''; });
    const style = document.createElement('style');
    style.textContent = '@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }';
    document.head.appendChild(style);
    close.addEventListener('click', () => {
      overlay.remove();
      document.body.style.overflow = '';
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form — envío real vía Formsubmit.co AJAX
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    fetch('https://formsubmit.co/ajax/fibertowerchile@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success === 'true' || data.success === true) {
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Solicitud enviada!';
        btn.style.background = '#28a745';
        btn.style.borderColor = '#28a745';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
        }, 4000);
      } else {
        throw new Error('Error en envío');
      }
    })
    .catch(() => {
      btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error al enviar';
      btn.style.background = '#dc3545';
      btn.style.borderColor = '#dc3545';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
      }, 4000);
    });
  });
}
