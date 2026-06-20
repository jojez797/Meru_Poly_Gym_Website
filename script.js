// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Modal Functions
const registrationModal = document.getElementById('registrationModal');

function selectMembership(plan, price) {
    document.getElementById('membership').value = `${plan} - $${price}/month`;
    registrationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
}

function closeModal() {
    registrationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target == registrationModal) {
        closeModal();
    }
});

// Form Submission
function submitRegistration(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        membership: document.getElementById('membership').value,
        gender: document.getElementById('gender').value,
        fitnessGoal: document.getElementById('fitnessGoal').value,
        paymentMethod: document.getElementById('paymentMethod').value,
        registrationDate: new Date().toISOString()
    };

    // Validate form
    if (!validateForm(formData)) {
        return;
    }

    // Save to localStorage (for demo purposes)
    saveRegistration(formData);

    // Show success message
    showSuccessMessage();

    // Reset form
    document.getElementById('registrationForm').reset();

    // Close modal after 2 seconds
    setTimeout(() => {
        closeModal();
    }, 2000);
}

function validateForm(data) {
    // Basic validation
    if (!data.fullName || data.fullName.trim() === '') {
        alert('Please enter your full name');
        return false;
    }

    if (!data.email || !isValidEmail(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!data.phone || data.phone.trim() === '') {
        alert('Please enter your phone number');
        return false;
    }

    if (!data.dob) {
        alert('Please select your date of birth');
        return false;
    }

    // Check if at least 18 years old
    const today = new Date();
    const birthDate = new Date(data.dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert('You must be at least 18 years old to register');
        return false;
    }

    if (!data.paymentMethod) {
        alert('Please select a payment method');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveRegistration(formData) {
    try {
        let registrations = JSON.parse(localStorage.getItem('gymRegistrations')) || [];
        registrations.push(formData);
        localStorage.setItem('gymRegistrations', JSON.stringify(registrations));
        console.log('Registration saved successfully');
    } catch (error) {
        console.error('Error saving registration:', error);
    }
}

function showSuccessMessage() {
    const modal = document.querySelector('.modal-content');
    const originalContent = modal.innerHTML;

    modal.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
            <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Registration Successful!</h2>
            <p style="color: #666; margin-bottom: 1rem;">
                Welcome to Meru Poly Gym! A confirmation email will be sent to your registered email address.
            </p>
            <p style="color: #666; font-size: 0.9rem;">
                You will be redirected shortly...
            </p>
        </div>
    `;

    setTimeout(() => {
        modal.innerHTML = originalContent;
    }, 2000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe facility cards
document.querySelectorAll('.facility-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Initialize: Log number of registrations
window.addEventListener('load', () => {
    try {
        const registrations = JSON.parse(localStorage.getItem('gymRegistrations')) || [];
        console.log(`Total registrations: ${registrations.length}`);
    } catch (error) {
        console.error('Error reading registrations:', error);
    }
});

// Export registrations as CSV (for demo purposes)
function exportRegistrationsCSV() {
    try {
        const registrations = JSON.parse(localStorage.getItem('gymRegistrations')) || [];
        
        if (registrations.length === 0) {
            alert('No registrations to export');
            return;
        }

        // Create CSV header
        const headers = ['Full Name', 'Email', 'Phone', 'Date of Birth', 'Gender', 'Membership Plan', 'Payment Method', 'Registration Date'];
        const csvContent = [
            headers.join(','),
            ...registrations.map(reg =>
                [
                    `"${reg.fullName}"`,
                    `"${reg.email}"`,
                    `"${reg.phone}"`,
                    reg.dob,
                    reg.gender,
                    `"${reg.membership}"`,
                    reg.paymentMethod,
                    new Date(reg.registrationDate).toLocaleString()
                ].join(',')
            )
        ].join('\n');

        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gym_registrations.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error exporting registrations:', error);
    }
}

// Add keyboard shortcut for export (Ctrl+Shift+E)
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'E') {
        exportRegistrationsCSV();
    }
});