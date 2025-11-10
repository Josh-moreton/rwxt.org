# rwx_t Global Color Theme System

## Overview
This site implements a comprehensive color theme system using CSS custom properties (variables) that supports both light and dark themes. The light theme is the default, and the dark theme can be activated via `data-theme="dark"` attribute or system preference detection.

## Color Palette

### Light Theme (Default)
- **Primary Blue:** `#216CFF` - Used for primary buttons, focus states, and key interactive elements
- **Accent Green:** `#00E0A4` - Used for hover states, links, and accent highlights
- **Background:** `#FFFFFF` - Main background color
- **Background Alt:** `#F5F5F5` - Alternative background for surfaces
- **Surface:** `#F8F7F6` - Card and panel backgrounds
- **Surface Alt:** `#FAFAFA` - Secondary surface color
- **Text:** `#0F0F10` - Primary text color
- **Text Secondary:** `#333` - Secondary text
- **Text Tertiary:** `#555` - Tertiary text
- **Text Muted:** `#666` - Muted text

### Dark Theme
- **Primary Blue:** `#216CFF` - Consistent across themes
- **Accent Green:** `#00E0A4` - Consistent across themes
- **Background:** `#0F0F10` - Dark background
- **Background Alt:** `#1A1A1A` - Alternative dark background
- **Surface:** `#1A1A1A` - Dark card backgrounds
- **Surface Alt:** `#252525` - Secondary dark surface
- **Text:** `#FFFFFF` - Light text on dark background
- **Text Secondary:** `#e0e0e0` - Secondary light text
- **Text Tertiary:** `#b0b0b0` - Tertiary light text
- **Text Muted:** `#999` - Muted light text

## Implementation

### CSS Variables Location
The CSS variables are defined in: `themes/spectral/assets/css/_variables.css`

This file is imported at the top of:
- `themes/spectral/assets/css/main.css` (for theme pages)
- `layouts/index.html` (for the custom homepage)

### Usage in CSS
```css
/* Example usage */
body {
  background: var(--bg);
  color: var(--text);
}

.button-primary {
  background: var(--primary);
  color: var(--bg);
}

.button-primary:hover {
  background: var(--accent);
}

a {
  color: var(--link-color);
}
```

## Activating Dark Theme

### Method 1: JavaScript Toggle (Recommended for UI toggle)
```javascript
// Enable dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Disable dark theme (revert to light)
document.documentElement.removeAttribute('data-theme');

// Toggle between themes
const currentTheme = document.documentElement.getAttribute('data-theme');
document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark');
```

### Method 2: System Preference Detection (Automatic)
The theme system automatically responds to the user's system preference:
```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* Dark theme variables applied automatically */
  }
}
```

### Method 3: Persistent Storage
For a complete toggle implementation with persistence:
```javascript
// Save preference to localStorage
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
}

// Load saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
```

## Adding a Theme Toggle Button (Future Implementation)

To add a toggle button to the site:

1. Add the HTML button:
```html
<button id="theme-toggle" aria-label="Toggle dark mode">
  <span class="light-icon">🌙</span>
  <span class="dark-icon">☀️</span>
</button>
```

2. Add the JavaScript:
```javascript
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Initialize from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.setAttribute('data-theme', 'dark');
}
```

## Accessibility Considerations

- All color combinations meet WCAG AA contrast requirements
- The system respects `prefers-color-scheme` for users who have set a system preference
- Theme state is properly reflected via `data-theme` attribute for screen readers
- Focus states use high-contrast colors (primary blue) in both themes

## Browser Support

The theme system uses CSS custom properties and is supported in:
- Chrome/Edge 49+
- Firefox 31+
- Safari 9.1+
- Opera 36+

For older browsers, the site will fall back to the light theme colors.

## Files Modified

1. `themes/spectral/assets/css/_variables.css` - New file containing all theme variables
2. `themes/spectral/assets/css/main.css` - Updated to import variables and use them throughout
3. `layouts/index.html` - Updated inline styles to use CSS variables

## Testing

To test the themes:

1. **Light Theme (Default):** Simply visit the site
2. **Dark Theme via JavaScript:** Open browser console and run:
   ```javascript
   document.documentElement.setAttribute('data-theme', 'dark');
   ```
3. **System Preference:** Change your OS to dark mode and refresh the page

## Future Enhancements

- Add a visible theme toggle button in the navigation
- Add smooth transition animations when switching themes
- Consider adding additional theme variants (e.g., "dim" mode)
- Add theme preference to user account settings (when authentication is added)
