/**
 * Reduced Motion Detection and Accessibility Utilities
 * Detects user's motion preferences and applies appropriate classes
 */

(function() {
  'use strict';

  function initReducedMotionDetection() {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotionChange(e) {
      if (e.matches) {
        document.body.classList.add('is-reduced-motion');
        console.info('Reduced motion enabled - animations disabled');
      } else {
        document.body.classList.remove('is-reduced-motion');
        console.info('Reduced motion disabled - animations enabled');
      }
    }
    
    // Set initial state
    handleReducedMotionChange(mediaQuery);
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleReducedMotionChange);
  }

  function initAccessibilityFeatures() {
    // Ensure focus visibility for keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
      }
    });

    document.addEventListener('mousedown', function() {
      document.body.classList.remove('using-keyboard');
    });

    // Skip to main content link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#banner';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--accent, #22D3EE);
      color: var(--bg, #0B0C0E);
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1001;
      font-family: var(--font-family-primary, sans-serif);
      font-weight: 500;
      transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', function() {
      this.style.top = '6px';
    });

    skipLink.addEventListener('blur', function() {
      this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initReducedMotionDetection();
      initAccessibilityFeatures();
    });
  } else {
    initReducedMotionDetection();
    initAccessibilityFeatures();
  }
})();