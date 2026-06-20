# Meru Poly Gym Website

A modern, responsive gym website with an informational site and membership registration system.

## Features

### 📱 Responsive Design
- Mobile-first approach
- Works seamlessly on all devices (desktop, tablet, mobile)
- Hamburger menu for mobile navigation

### 🏋️ Gym Information
- **Facilities Section**: Showcases gym facilities including weight training, cardio, yoga, swimming pool, group classes, and locker rooms
- **Hours Section**: Operating hours for weekdays, weekends, and holidays
- **Contact Section**: Location, phone number, email, and social media links

### 💳 Membership Plans
Three membership tiers:
1. **Basic** - $29.99/month
   - Gym access and all equipment
   
2. **Premium** - $49.99/month (Most Popular)
   - Gym access, all equipment, and group classes
   
3. **Elite** - $99.99/month
   - Gym access, all equipment, group classes, and personal trainer

### 📝 Registration System
Complete registration form with:
- Personal information (name, email, phone)
- Date of birth validation (must be 18+)
- Gender selection
- Fitness goals input
- Payment method selection
- Terms and conditions agreement
- Form validation and success confirmation
- Data storage in browser localStorage

### ✨ Additional Features
- Smooth scrolling navigation
- Hover effects and animations
- Modal-based registration popup
- Form validation with error messages
- Success confirmation message
- Keyboard shortcut (Ctrl+Shift+E) to export registrations as CSV
- Local data persistence using localStorage

## File Structure

```
Meru_Poly_Gym_Website/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Comprehensive CSS with responsive design
├── script.js           # JavaScript for interactivity and form handling
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in a web browser
2. **Navigate**: Use the navigation bar to scroll to different sections
3. **View Information**: Browse gym facilities, hours, and contact information
4. **Join**: Click "Join Now" button or select a membership plan
5. **Register**: Fill out the registration form and submit
6. **Export Data** (Admin): Press `Ctrl+Shift+E` to export all registrations as CSV

## Technical Details

### Technologies Used
- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks required)
- LocalStorage API for data persistence

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Features Breakdown

#### HTML (`index.html`)
- Semantic HTML5 structure
- Responsive meta viewport tag
- Accessible form with proper labels
- Modal for registration
- Semantic section elements

#### CSS (`styles.css`)
- CSS custom properties (variables) for easy customization
- Responsive grid layouts
- Smooth animations and transitions
- Hover effects
- Mobile-first approach with media queries
- Dark and light color schemes

#### JavaScript (`script.js`)
- Form validation with age verification
- Modal management
- Data persistence using localStorage
- Email validation
- CSV export functionality
- Smooth scrolling
- Intersection Observer for scroll animations
- Responsive hamburger menu

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --dark-color: #2d3436;
    --light-color: #f5f5f5;
}
```

### Contact Information
Update the contact section in `index.html`:
- Address
- Phone number
- Email
- Social media links

### Membership Plans
Modify the membership cards in `index.html` to change:
- Plan names
- Prices
- Features

## Registration Data

Registrations are stored in the browser's localStorage under the key `gymRegistrations`. The data includes:
- Full name
- Email
- Phone
- Date of birth
- Gender
- Membership plan
- Fitness goals
- Payment method
- Registration timestamp

### Viewing Stored Data
Open browser console and run:
```javascript
JSON.parse(localStorage.getItem('gymRegistrations'))
```

### Exporting Data
Press `Ctrl+Shift+E` to download all registrations as a CSV file.

### Clearing Data
To clear all registrations:
```javascript
localStorage.removeItem('gymRegistrations')
```

## Future Enhancements

- Backend integration for database storage
- Email notifications for registrations
- Payment gateway integration
- Member login portal
- Class schedule and booking system
- Trainer profiles and booking
- News/Blog section
- Image gallery
- Video testimonials

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please contact: info@merupolygym.com

---

**Created for Meru Poly Gym** | 2024