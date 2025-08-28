/*==================== Toggle Icon Navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the navbar visibility when the menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');    // Toggle the menu icon to an "X" when clicked
    navbar.classList.toggle('active');    // Toggle the navbar to show/hide
};

/*==================== Scroll Sections Active Link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlight active navigation link based on scroll position
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;                           // Current scroll position
        let offset = section.offsetTop - 150;               // Top position of the section with offset
        let height = section.offsetHeight;                  // Height of the section
        let id = section.getAttribute('id');                // ID of the section

        // Check if the scroll position is within the section range
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));  
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });

    /*==================== Sticky Navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    /*==================== Close Navbar When Clicked on Link (Scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== Scroll Reveal ====================*/
// Configure ScrollReveal for animations
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Apply ScrollReveal animations to various sections
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== Typed.js ====================*/
// Configure Typed.js for the typing animation
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Mobile Developer', 'UI/UX Designer'],
    typeSpeed: 100,         // Faster typing for nicer effect
    backSpeed: 60,          // Smooth backspacing
    loop: true,
    backDelay: 2000
});

// Contact Form Submission using EmailJS
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent page reload

    emailjs.sendForm('service_fquvdya', 'template_cmedlkl', this)
    .then(() => {
        alert('Message sent successfully!');
        contactForm.reset(); // Clear form after submission
    }, (error) => {
        alert('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
    });
});

