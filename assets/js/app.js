// Main JavaScript functionality for 2C Teknoloji Static Site

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initializeAnimations();
  initializeNavigation();
  initializeCarousels();
  initializeScrollEffects();
  initializeLazyLoading();
  
  // Initialize translations
  if (window.translations) {
    window.translations.updatePageContent();
    window.translations.updateLanguageButton();
  }
});

// Animation system
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.service-card, .stat-item, .fade-in-up');
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// Navigation functionality
function initializeNavigation() {
  const navbar = document.querySelector('.custom-header');
  let lastScrollY = window.scrollY;

  // Handle navbar transparency on scroll
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar.style.background = 'rgba(var(--background), 0.98)';
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.background = 'rgba(var(--background), 0.95)';
      navbar.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
  });

  // Active navigation link highlighting
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath || (currentPath === '/' && linkPath.includes('index'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile menu handling
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }
}

// Enhanced carousel functionality
function initializeCarousels() {
  const heroCarousel = document.getElementById('heroCarousel');
  if (heroCarousel) {
    // Add touch support for better mobile experience
    let startX = 0;
    let startY = 0;
    let threshold = 100;

    heroCarousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });

    heroCarousel.addEventListener('touchend', (e) => {
      if (!startX || !startY) return;

      let endX = e.changedTouches[0].clientX;
      let endY = e.changedTouches[0].clientY;
      
      let diffX = startX - endX;
      let diffY = startY - endY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
        const carousel = bootstrap.Carousel.getInstance(heroCarousel);
        if (diffX > 0) {
          carousel.next();
        } else {
          carousel.prev();
        }
      }

      startX = 0;
      startY = 0;
    });

    // Pause on hover
    heroCarousel.addEventListener('mouseenter', () => {
      const carousel = bootstrap.Carousel.getInstance(heroCarousel);
      if (carousel) carousel.pause();
    });

    heroCarousel.addEventListener('mouseleave', () => {
      const carousel = bootstrap.Carousel.getInstance(heroCarousel);
      if (carousel) carousel.cycle();
    });
  }
}

// Scroll effects and parallax
function initializeScrollEffects() {
  let ticking = false;

  function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });

    // Counter animation for stats
    animateCounters();
    
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
}

// Animate number counters
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 100;

  counters.forEach(counter => {
    if (isElementInViewport(counter) && !counter.classList.contains('animated')) {
      counter.classList.add('animated');
      const target = parseInt(counter.textContent.replace(/\D/g, ''));
      const increment = target / speed;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        const suffix = counter.textContent.includes('%') ? '%' : '+';
        counter.textContent = Math.floor(current) + suffix;
        
        if (current >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        }
      }, 20);
    }
  });
}

// Lazy loading for images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Utility functions
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Form handling (if contact forms exist)
function initializeFormHandling() {
  const forms = document.querySelectorAll('form[data-form]');
  
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Show loading state
  const submitButton = form.querySelector('[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Gönderiliyor...';
  submitButton.disabled = true;
  
  // Simulate form submission (replace with actual endpoint)
  setTimeout(() => {
    // Show success message
    showNotification('Form başarıyla gönderildi!', 'success');
    form.reset();
    
    // Reset button
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} notification fixed-top`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    min-width: 300px;
    animation: slideInRight 0.3s ease-out;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize additional features
initializeSmoothScrolling();
initializeFormHandling();

// Export utilities for global use
window.appUtils = {
  showNotification,
  debounce,
  isElementInViewport,
  animateCounters
};

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  .animate-in {
    animation: slideUp 0.6s ease-out forwards;
  }
  
  .lazy {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .lazy.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(style);