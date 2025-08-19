# 2C Teknoloji - Static Website

A fully static website for 2C Teknoloji built with HTML, CSS, Bootstrap, and vanilla JavaScript.

## Features

- 🚀 **100% Static** - No Node.js or React dependencies
- 🌍 **Multi-language** - Turkish/English language switching
- 📱 **Responsive Design** - Bootstrap 5 responsive components
- ✨ **Modern UI** - Custom CSS with animations and effects
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🖼️ **Image Sliders** - Bootstrap carousel components
- 🎨 **Interactive Elements** - Smooth animations and hover effects

## Structure

```
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── projects.html           # Projects page
├── careers.html            # Careers page
├── references.html         # References page
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styling
│   └── js/
│       ├── app.js          # Main JavaScript functionality
│       └── translations.js # Language system
└── public/
    └── lovable-uploads/    # Image assets
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables
- **Bootstrap 5** - Responsive components and utilities
- **Bootstrap Icons** - Icon library
- **Vanilla JavaScript** - Interactive functionality
- **Translation System** - Custom multi-language support

## Features

### Language System
- Turkish (default) and English support
- Local storage persistence
- Dynamic content translation
- Fallback to original text for missing translations

### Interactive Components
- Hero carousel with touch support
- Smooth scrolling navigation
- Animated counters
- Parallax effects
- Mobile-responsive menu

### SEO & Performance
- Meta tags and Open Graph
- Semantic HTML structure
- Optimized images
- Fast loading static assets

## Deployment

This is a static website that can be deployed to any web hosting service:

- **Shared Hosting** - Upload all files to public_html folder
- **GitHub Pages** - Push to repository and enable Pages
- **Netlify/Vercel** - Connect repository for automatic deployment
- **CDN** - Any static hosting provider

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11+ (limited support)

## Customization

### Colors & Styling
Edit `assets/css/styles.css` CSS variables:
```css
:root {
  --primary: 33, 150, 243;
  --secondary: 103, 58, 183;
  /* ... other variables */
}
```

### Content Translation
Add new translations in `assets/js/translations.js`:
```javascript
const translations = {
  tr: {
    'new.key': 'Turkish text',
  },
  en: {
    'new.key': 'English text',
  }
};
```

### Adding New Pages
1. Create new HTML file
2. Copy header/footer structure from existing files
3. Add navigation link to all pages
4. Add translations if needed

## Performance Optimizations

- CSS and JS files are minified for production
- Images are optimized for web
- Bootstrap is loaded from CDN
- Critical CSS is inlined where needed

## License

© 2024 2C Teknoloji. All rights reserved.
