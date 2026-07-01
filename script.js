const WHATSAPP_NUMBER = '923101371827';

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const service = document.getElementById('serviceName').value.trim();
    const date = document.getElementById('bookingDate').value.trim();
    const time = document.getElementById('bookingTime').value.trim();
    const note = document.getElementById('bookingMessage').value.trim();

    const text = [
      'Hello Luna Beauty Lounge, I want to book an appointment.',
      '',
      `Name: ${name}`,
      `Phone Number: ${phone}`,
      `Service: ${service}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Additional Note: ${note || 'No additional note'}`
    ].join('\n');

    openWhatsApp(text);
  });
}

document.querySelectorAll('.service-book').forEach(button => {
  button.addEventListener('click', function() {
    const service = this.dataset.service;
    const serviceField = document.getElementById('serviceName');
    serviceField.value = service;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });
}
