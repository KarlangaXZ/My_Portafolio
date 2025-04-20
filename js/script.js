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



//traslate
   // Translation functionality
   document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) {
      translateBtn.addEventListener('click', function() {
        const currentLang = this.querySelector('span').textContent;
        if (currentLang === 'ES') {
          this.querySelector('span').textContent = 'EN';
          translateToSpanish();
        } else {
          this.querySelector('span').textContent = 'ES';
          translateToEnglish();
        }
      });
    }
  });
  
  function translateToSpanish() {
    // Navigation
    document.querySelectorAll('.nav-links li a')[0].textContent = 'Sobre mí';
    document.querySelectorAll('.nav-links li a')[1].textContent = 'Proyectos';
    document.querySelectorAll('.nav-links li a')[2].textContent = 'Contacto';
    
    // Hero section
    document.querySelector('.hero h1').innerHTML = 'Hola, Soy <span class="text-primary">&#60;Carlos Linares&#62;</span>';
    document.querySelector('.hero h2').textContent = 'Desarrollador FullStack';
    document.querySelector('.hero p').textContent = 'La pared más grande que necesitas escalar es la que construyes en tu mente, ¡PODER!';
    document.querySelector('.hero .btn-primary').textContent = 'Ver Proyectos';
    document.querySelector('.hero .btn-secondary').textContent = 'Contáctame';
    
    // About section
    document.querySelector('#about h2').textContent = 'Sobre Mí';
    const aboutParagraphs = document.querySelectorAll('#about > div > div > div:first-child > p');
    aboutParagraphs[0].textContent = 'Soy un desarrollador frontend apasionado con una sólida base en HTML, CSS y JavaScript. Disfruto creando sitios web responsivos y fáciles de usar que brindan excelentes experiencias de usuario.';
    aboutParagraphs[1].textContent = 'Mi viaje en desarrollo web comenzó en 2022 después de decidir hacer la transición de una carrera en ventas y contabilidad a desarrollador web. Desde entonces, he estado constantemente aprendiendo y mejorando mis habilidades para mantenerme actualizado con las últimas tecnologías y mejores prácticas.';
    document.querySelector('#about h3').textContent = 'Habilidades';
    
    // Projects section
    document.querySelector('#projects h2').textContent = 'Proyectos';
    
    // Project descriptions
    const projectTitles = document.querySelectorAll('#projects .p-6 h3');
    const projectDescriptions = document.querySelectorAll('#projects .p-6 p');
    const projectLinks = document.querySelectorAll('#projects .p-6 .flex a');
    
    // Twitter Clone
    if (projectTitles[0]) projectTitles[0].textContent = 'Clon de Twitter';
    if (projectDescriptions[0]) projectDescriptions[0].textContent = 'Clon de Twitter es un proyecto que simula la interfaz de usuario de Twitter. Este clon incluye páginas de inicio, páginas de inicio de sesión y un feed de noticias, así como funcionalidades como publicar mensajes y administrar cuentas.';
    
    // Portfolio
    if (projectTitles[1]) projectTitles[1].textContent = 'Portafolio';
    if (projectDescriptions[1]) projectDescriptions[1].textContent = 'Un sitio web de portafolio personal responsivo construido con HTML, CSS y JavaScript. Cuenta con un diseño limpio, exhibición de proyectos y formulario de contacto. Utiliza Tailwind CSS para el estilo e incorpora animaciones suaves para una experiencia de usuario mejorada.';
    
    // Movie Search
    if (projectTitles[2]) projectTitles[2].textContent = 'Buscador de Películas';
    if (projectDescriptions[2]) projectDescriptions[2].textContent = 'La aplicación de búsqueda de películas es una aplicación web construida con React, TypeScript y la API de TMDb que permite a los usuarios buscar películas en tiempo real. Muestra títulos de películas, descripciones y carteles, y presenta una interfaz de usuario simple y limpia estilizada con CSS personalizado.';
    
     // product-list-with-cart-main
     if (projectTitles[3]) projectTitles[3].textContent = 'lista de productos con carrito principal';
     if (projectDescriptions[3]) projectDescriptions[3].textContent = 'Lista de Productos con Carrito es una sencilla aplicación web que permite a los usuarios ver una lista de productos y añadirlos al carrito de compra. El objetivo principal es demostrar cómo gestionar dinámicamente el contenido del carrito utilizando HTML, CSS y JavaScript puros (sin frameworks ni bibliotecas externas).';
     
      // UnPaint
    if (projectTitles[4]) projectTitles[4].textContent = 'UnPaint';
    if (projectDescriptions[4]) projectDescriptions[4].textContent = 'UnPaint es una aplicación de dibujo similar al clásico Paint de Windows, desarrollada en C# utilizando Windows Forms. Con UnPaint, puedes dibujar libremente en lienzo, seleccionar colores, ajustar el grosor de la línea y realizar acciones básicas de pintura.';
    
      // Mangalos Pokemon
    if (projectTitles[5]) projectTitles[5].textContent = 'Mangalos Pokémon';
    if (projectDescriptions[5]) projectDescriptions[5].textContent = 'Mangalos es un juego inspirado en el universo Pokémon, donde cada criatura tiene una forma única basada en su tipo. Los jugadores pueden elegir entre 30 Pokémon iniciales de tipos Fuego, Planta o Agua para comenzar su aventura. El sitio ofrece una descarga directa del juego, un tráiler que muestra el gameplay y una experiencia centrada en la exploración donde la personalización y evolución de los Pokémon son características clave.';
    

    // Update code/live text
    for (let i = 0; i < projectLinks.length; i++) {
      if (projectLinks[i].innerHTML.includes('fa-github')) {
        projectLinks[i].innerHTML = '<i class="fab fa-github mr-2"></i> Código';
      } else if (projectLinks[i].innerHTML.includes('fa-external-link-alt')) {
        projectLinks[i].innerHTML = '<i class="fas fa-external-link-alt mr-2"></i> Ver';
      }
    }
    
    // Contact section
    document.querySelector('#contact h2').textContent = 'Contáctame';
    document.querySelector('#contact .md\\:w-1\\/2 p').textContent = '¡No dudes en contactarme para colaboraciones o simplemente para saludar!';
    document.querySelector('label[for="name"]').textContent = 'Nombre';
    document.querySelector('label[for="email"]').textContent = 'Correo';
    document.querySelector('label[for="message"]').textContent = 'Mensaje';
    document.querySelector('#contact button').textContent = 'Enviar Mensaje';
    
    // Footer
    document.querySelector('footer p').textContent = '© 2023 Carlos Linares. Todos los derechos reservados.';
  }
  
  function translateToEnglish() {
    // Navigation
    document.querySelectorAll('.nav-links li a')[0].textContent = 'About';
    document.querySelectorAll('.nav-links li a')[1].textContent = 'Projects';
    document.querySelectorAll('.nav-links li a')[2].textContent = 'Contact';
    
    // Hero section
    document.querySelector('.hero h1').innerHTML = 'Hello, I\'m <span class="text-primary">&#60;Carlos Linares&#62;</span>';
    document.querySelector('.hero h2').textContent = 'FullStack Developer';
    document.querySelector('.hero p').textContent = 'The biggest wall that you need climb is the one that build in your mind, SO POWER!.';
    document.querySelector('.hero .btn-primary').textContent = 'View Projects';
    document.querySelector('.hero .btn-secondary').textContent = 'Contact Me';
    
    // About section
    document.querySelector('#about h2').textContent = 'About Me';
    const aboutParagraphs = document.querySelectorAll('#about > div > div > div:first-child > p');
    aboutParagraphs[0].textContent = 'I\'m a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. I enjoy creating responsive and user-friendly websites that provide great user experiences.';
    aboutParagraphs[1].textContent = 'My web development journey began in 2022 after I decided to transition from a sales and accounting career to a web developer. Since then, I\'ve been constantly learning and improving my skills to stay up-to-date with the latest technologies and best practices.';
    document.querySelector('#about h3').textContent = 'Skills';
    
    // Projects section
    document.querySelector('#projects h2').textContent = 'Projects';
    
    // Project descriptions
    const projectTitles = document.querySelectorAll('#projects .p-6 h3');
    const projectDescriptions = document.querySelectorAll('#projects .p-6 p');
    const projectLinks = document.querySelectorAll('#projects .p-6 .flex a');
    
    // Twitter Clone
    if (projectTitles[0]) projectTitles[0].textContent = 'Karlangaxz Twitter Clone';
    if (projectDescriptions[0]) projectDescriptions[0].textContent = 'Twitter Clone is a project that simulates the user interface of Twitter. This clone includes home pages, login pages, and a news feed, as well as functionalities such as posting messages and managing accounts.';
    
    // Portfolio
    if (projectTitles[1]) projectTitles[1].textContent = 'Portfolio';
    if (projectDescriptions[1]) projectDescriptions[1].textContent = 'A responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean design, project showcase, and contact form. Utilizes Tailwind CSS for styling and incorporates smooth animations for an enhanced user experience.';
    
    // Movie Search
    if (projectTitles[2]) projectTitles[2].textContent = 'App Movie Search';
    if (projectDescriptions[2]) projectDescriptions[2].textContent = 'The Movie Search App is a web application built with React, TypeScript, and TMDb API that allows users to search for movies in real time. It displays movie titles, descriptions, and posters, and features a simple and clean UI styled with custom CSS.';
   
    // product-list-with-cart-main
   if (projectTitles[3]) projectTitles[3].textContent = 'Product List with Cart';
   if (projectDescriptions[3]) projectDescriptions[3].textContent = 'Product List with Cart is a simple web application that allows users to view a list of products and add them to a shopping cart. The main focus is to demonstrate how to dynamically manage cart content using pure HTML, CSS, and JavaScript ';
   
    
    // UnPaint
    if (projectTitles[4]) projectTitles[4].textContent = 'UnPaint';
    if (projectDescriptions[4]) projectDescriptions[4].textContent = 'UnPaint is a drawing application similar to the classic Windows Paint, developed in C# using Windows Forms. With UnPaint, you can draw freely on the canvas, select colors, adjust line thickness, and perform basic painting actions.';
    
    // Mangalos Pokemon
    if (projectTitles[5]) projectTitles[5].textContent = 'Mangalos Pokemon';
    if (projectDescriptions[5]) projectDescriptions[5].textContent = 'Mangalos is a game inspired by the Pokémon universe, where each creature has a unique form based on its type. Players can choose from 30 starter Pokémon of Fire, Grass, or Water types to begin their adventure. The site offers a direct game download, a trailer showcasing gameplay, and an exploration-focused experience where Pokémon customization and evolution are key features.';
    
    

    // Update code/live text
    for (let i = 0; i < projectLinks.length; i++) {
      if (projectLinks[i].innerHTML.includes('fa-github')) {
        projectLinks[i].innerHTML = '<i class="fab fa-github mr-2"></i> Code';
      } else if (projectLinks[i].innerHTML.includes('fa-external-link-alt')) {
        projectLinks[i].innerHTML = '<i class="fas fa-external-link-alt mr-2"></i> Live';
      }
    }
    
    // Contact section
    document.querySelector('#contact h2').textContent = 'Contact Me';
    document.querySelector('#contact .md\\:w-1\\/2 p').textContent = 'Feel free to reach out to me for collaboration or just to say hi!';
    document.querySelector('label[for="name"]').textContent = 'Name';
    document.querySelector('label[for="email"]').textContent = 'Email';
    document.querySelector('label[for="message"]').textContent = 'Message';
    document.querySelector('#contact button').textContent = 'Send Message';
    
    // Footer
    document.querySelector('footer p').textContent = '© 2023 Carlos Linares. All rights reserved.';
  }
