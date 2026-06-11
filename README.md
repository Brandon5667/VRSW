# Veterans Residential Services of Wilson - Website

Welcome to the official website of Veterans Residential Services (VRS) of Wilson, a non-profit organization dedicated to serving and supporting veterans in our community.

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    - Main navigation bar
│   │   └── Footer.jsx        - Footer component
│   ├── pages/
│   │   ├── Home.jsx          - Home page
│   │   ├── About.jsx         - About us page
│   │   ├── Services.jsx      - Services overview
│   │   ├── Contact.jsx       - Contact form & info
│   │   └── Testimonials.jsx  - Veteran testimonials
│   ├── styles/
│   │   └── index.css         - Global styles & Tailwind
│   ├── assets/               - Images & logos
│   ├── App.jsx              - Main app with routing
│   └── main.jsx             - Entry point
├── public/                   - Static assets
├── index.html               - HTML template
├── package.json             - Dependencies
├── vite.config.js          - Vite configuration
└── tailwind.config.js      - Tailwind CSS configuration
```

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Multiple Pages** - Home, About, Services, Contact, Testimonials
- **React Router** - Client-side routing for smooth navigation
- **Modern Stack** - React 18, Vite, Tailwind CSS
- **Professional Styling** - Navy and gold color scheme
- **Contact Form** - Interactive contact form with validation
- **Mobile Menu** - Responsive hamburger menu

## Customization

### Update Organization Info

1. **Contact Information**: Update in [src/components/Footer.jsx](src/components/Footer.jsx) and [src/pages/Contact.jsx](src/pages/Contact.jsx)
2. **Logo**: Replace VRS text logo in [src/components/Navigation.jsx](src/components/Navigation.jsx)
3. **Colors**: Modify in [tailwind.config.js](tailwind.config.js)
4. **Content**: Update page content in the `src/pages/` directory

### Add Images

Place images in the `src/assets/` folder and import them:

```jsx
import myImage from '../assets/my-image.jpg'
```

## Technologies Used

- **React 18** - UI library
- **React Router v6** - Routing
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **PostCSS** - CSS processing

## Support & Maintenance

For updates, bug fixes, or feature requests, please contact the development team.

## License

© 2024 Veterans Residential Services of Wilson. All rights reserved.

---

*Built with ❤️ for our veterans*
# VRSW
