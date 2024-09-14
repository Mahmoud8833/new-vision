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

// Google Maps Initialization
function initMap() {
  var companyLocation = { lat: 30.9753568, lng: 29.7222227 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: companyLocation,
  });
  var marker = new google.maps.Marker({
    position: companyLocation,
    map: map,
  });
}

// Email form submission with EmailJS
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Example of using EmailJS to send the email
    emailjs.sendForm('service_uts2qy3', 'template_2h3zse7', this).then(
      function () {
        alert('Message sent successfully!');
      },
      function (error) {
        alert('Failed to send message. Please try again.');
      }
    );
  });
