// Handle Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Handle Modals
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');
const modalTriggers = document.querySelectorAll('[data-modal]');

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = trigger.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
