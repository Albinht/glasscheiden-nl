// JavaScript voor truckmodelbouw.nl

// Cookie Banner Functionaliteit
document.addEventListener('DOMContentLoaded', function() {
    // Check cookie consent
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').classList.add('show');
    }
});

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').classList.remove('show');
}

// Zoekfunctionaliteit
function searchSite(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    if (searchTerm.trim() === '') {
        alert('Voer een zoekterm in');
        return false;
    }

    // Simuleer zoekresultaten
    alert(`Zoeken naar: "${searchTerm}"\n\nDeze functionaliteit wordt binnenkort toegevoegd.`);
    return false;
}

// Algemene hulpfuncties
function formatNumber(number, decimals = 2) {
    return Number(number).toFixed(decimals).replace('.', ',');
}

function parseFloatNL(str) {
    return parseFloat(str.replace(',', '.'));
}

// Validatie functies
function validatePositiveNumber(value) {
    const num = parseFloatNL(value);
    return !isNaN(num) && num > 0;
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.border = '2px solid #d32f2f';
        const errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.style.color = '#d32f2f';
        errorMsg.style.fontSize = '0.9em';
        errorMsg.textContent = message;
        element.parentNode.appendChild(errorMsg);
    }
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());

    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.style.border = '2px solid #d0d0d0';
    });
}

// Smooth scroll voor anker links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Print functionaliteit voor tools
function printResults(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Resultaten - Truckmodelbouw.nl</title>');
        printWindow.document.write('<link rel="stylesheet" href="styles.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<div class="container">');
        printWindow.document.write(element.innerHTML);
        printWindow.document.write('</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
}

// Export functionaliteit
function exportToCSV(data, filename) {
    const csvContent = "data:text/csv;charset=utf-8," + data;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Mobile Navigation Toggle
function toggleNav() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('nav-open');
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.querySelector('.nav-toggle');

    if (navMenu && !nav.contains(event.target)) {
        navMenu.classList.remove('nav-open');
    }
});

// Close mobile nav when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('nav-open');
        });
    });
});

// Blog Filter Functionality
function filterPosts(category) {
    const posts = document.querySelectorAll('.blog-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Show/hide posts
    posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}