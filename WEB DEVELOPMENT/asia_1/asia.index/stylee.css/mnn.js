// Smooth scrolling for navigation links const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => { link.addEventListener('click', e => { e.preventDefault(); const targetId = e.currentTarget.getAttribute('href'); const targetElement = document.querySelector(targetId); targetElement.scrollIntoView({ behavior: 'smooth' }); }); });

// Form submission const form = document.querySelector('form');

form.addEventListener('submit', e => { 
    e.preventDefault(); 
    const formData = new FormData(form); 
    const name = formData.get('name'); 
    const email = formData.get('email'); 
    const message = formData.get('message'); 
});

// Here, you can add code to send the form data to a server or display a success message console.log('Form submitted:', name, email, message);

// Reset the form form.reset(); });