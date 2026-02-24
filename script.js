const themeToggleButton = document.querySelector('.theme-toggle-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

const currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);


// Theme switcher
themeToggleButton.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Hamburger menu
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});