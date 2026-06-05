// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3G's Barber Salon Lounge — JavaScript
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60); });
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  const dateInput = document.getElementById('b-date');
  if (dateInput) dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn-3gs');
    btn.textContent = '✅ Reservation Received! We\'ll confirm shortly.';
    btn.style.background = '#27ae60';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Reserve My Appointment'; btn.style.background = ''; btn.disabled = false; bookingForm.reset(); }, 4500);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.service-card, .about-card, .hours-table-wrap, .contact-card, .pillar').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(25px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(el);
});
