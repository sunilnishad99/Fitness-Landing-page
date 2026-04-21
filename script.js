// 1. Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// 2. FAQ Accordion Logic
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.style.display === 'block';
        
        // Sabko close karo pehle
        document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
        
        // Current wale ko toggle karo
        body.style.display = isOpen ? 'none' : 'block';
    });
});

// 3. Scroll Reveal Animation
const reveal = () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', reveal);
reveal(); // Initial check

// 4. Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});