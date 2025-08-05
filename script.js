/**
 * script.js
 * This file contains the JavaScript for the website's interactive features.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top-btn');

    if (backToTopButton) {
        // Show or hide the button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Show button after scrolling 300px
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        // Scroll to the top when the button is clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Scroll Animations ---
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    // Use Intersection Observer for better performance
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the section is in the viewport, add the 'is-visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the section once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // relative to the viewport
        threshold: 0.1 // trigger when 10% of the section is visible
    });

    // Observe each section
    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

});
