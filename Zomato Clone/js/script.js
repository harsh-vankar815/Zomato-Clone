// script.js

// Smooth scroll for internal links
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Typing animation for Hero section
const typingAnimation = (text, element) => {
    let index = 0;

    const typeEffect = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index++);
            setTimeout(typeEffect, 100);
        }
    };
    typeEffect();
};

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTextElement = document.querySelector('.hero p');
    typingAnimation("Hungry? Order your favorites on Zomato now!", heroTextElement);
    createAriaLiveRegion();
    smoothScroll();
});

// Create ARIA live region for assistive technologies
const createAriaLiveRegion = () => {
    const ariaLiveRegion = document.createElement('div');
    ariaLiveRegion.setAttribute('aria-live', 'polite');
    ariaLiveRegion.style.position = 'absolute';
    ariaLiveRegion.style.opacity = '0';
    document.body.appendChild(ariaLiveRegion);
};

// Hover effect for 'Order Now' button
const setupOrderNowButton = () => {
    const orderNowButton = document.querySelector('.order-now');

    orderNowButton.addEventListener('mouseenter', () => {
        orderNowButton.style.transform = 'translateY(-5px)';
        orderNowButton.style.background = '#ff3333';
    });

    orderNowButton.addEventListener('mouseleave', () => {
        orderNowButton.style.transform = 'translateY(0)';
        orderNowButton.style.background = 'linear-gradient(135deg, #ff5252, #ff7961)';
    });
};

// Toggle between email and phone in 'Get the App' section
const setupContactMethodToggle = () => {
    const optionRadios = document.querySelectorAll('.option input[type="radio"]');
    const inputField = document.querySelector('.input-group input');

    optionRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            inputField.placeholder = radio.value === 'email' ? 'Email' : 'Phone Number';
        });
    });
};

// Add active class to header links when scrolling
const setupScrollActiveLinks = () => {
    const headerLinks = document.querySelectorAll('.header-container ul li a');

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    const handleScroll = debounce(() => {
        let scrollPosition = window.scrollY;
        headerLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (section && section.offsetTop <= scrollPosition + 100 && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, 100);

    window.addEventListener('scroll', handleScroll);
};

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', () => {
    setupOrderNowButton();
    setupContactMethodToggle();
    setupScrollActiveLinks();
});
