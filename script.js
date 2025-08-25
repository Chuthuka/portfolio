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
        let offset = section.offsetTop - 150;                // Top position of the section with offset
        let height = section.offsetHeight;                   // Height of the section
        let id = section.getAttribute('id');                  // ID of the section

        // Check if the scroll position is within the section range
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');  // Remove active class from all links
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add active class to current section's link
            });
        }
    });

    /*==================== Sticky Navbar ====================*/
    let header = document.querySelector('header');

    // Add sticky class to the header when scrolling past 100px
    header.classList.toggle('sticky', window.scrollY > 100);
    
    /*==================== Close Navbar When Clicked on Link (Scroll) ====================*/
    menuIcon.classList.remove('bx-x');  // Remove the "X" from the menu icon
    navbar.classList.remove('active');  // Hide the navbar
};

/*==================== Scroll Reveal ====================*/
// Configure ScrollReveal for animations
ScrollReveal({ 
    reset: true,          // Reset animations after they are revealed
    distance: '80px',     // The distance the element moves during animation
    duration: 2000,       // Duration of the animation in ms
    delay: 200            // Delay before the animation starts
});

// Apply ScrollReveal animations to various sections
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== Typed.js ====================*/
// Configure Typed.js for the typing animation
const typed = new Typed('.mutiple-text', {
    strings: ['Web Developer', 'Mobile Developer', 'UI/UX Designer'],  // The roles to type
    typeSpeed: 20,         // Speed of typing
    backSpeed: 20,         // Speed of backspacing
    loop: true,            // Loop the animation
    backDelay: 2000        // Delay before starting to backspace
});
