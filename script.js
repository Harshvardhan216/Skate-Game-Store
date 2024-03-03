document.addEventListener('DOMContentLoaded', function () {
    // Function to handle search bar interaction
    const searchBar = document.querySelector('.search-bar input');
    searchBar.addEventListener('focus', function () {
        // Add styles or animations when the search bar is focused
        searchBar.placeholder = "Type to search...";
    });
    searchBar.addEventListener('blur', function () {
        // Remove styles or animations when the search bar loses focus
        searchBar.placeholder = "Search";
    });

    // Function to toggle dark mode
    const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
    const body = document.body;
    let darkModeEnabled = false;

    toggleDarkModeBtn.addEventListener('click', function () {
        darkModeEnabled = !darkModeEnabled;
        if (darkModeEnabled) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    // Function to handle card hover effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Function to handle responsive navigation menu
    const navToggle = document.querySelector('.navigation');
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close navigation menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('show');
        }
    });

    // Function to handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add more interactive functions based on your website features
});