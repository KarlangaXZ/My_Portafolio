// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll Animation
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.getBoundingClientRect().height;
    
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 80)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });
        
        // Reset form
        contactForm.reset();
        
        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Add scroll animation class to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add the scroll-animation class to elements you want to animate
    document.querySelectorAll('.project-card, .about-content, .contact-content').forEach(el => {
        el.classList.add('scroll-animation');
    });
    
    // Initial check for elements in view
    handleScrollAnimation();
});