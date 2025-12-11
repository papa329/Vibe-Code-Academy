// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.addEventListener('click', () => {
        const opened = navMenu.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
}

// Formation dropdown functionality
const formationBtn = document.getElementById('formation-btn');
const formationDropdown = document.getElementById('formation-dropdown');

if (formationBtn && formationDropdown) {
    formationBtn.setAttribute('aria-haspopup', 'true');
    formationBtn.setAttribute('aria-expanded', 'false');
    formationDropdown.setAttribute('aria-hidden', 'true');

    formationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const opened = formationDropdown.classList.toggle('open');
        formationBtn.setAttribute('aria-expanded', opened ? 'true' : 'false');
        formationDropdown.setAttribute('aria-hidden', opened ? 'false' : 'true');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!formationDropdown.contains(e.target) && e.target !== formationBtn) {
            formationDropdown.classList.remove('open');
            formationBtn.setAttribute('aria-expanded', 'false');
            formationDropdown.setAttribute('aria-hidden', 'true');
        }
    });

    formationDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Show course details
function showDetails(course) {
    const courseNames = {
        'html': 'HTML Fondasyon',
        'css': 'CSS Stil ak Design',
        'js': 'JavaScript Dinamik'
    };
    
    const descriptions = {
        'html': `
            <h3>HTML Fondasyon - Detay Konplè</h3>
            <p><strong>Kisa w ap aprann:</strong></p>
            <ul>
                <li>Estrikti fondamantal yon dokiman HTML</li>
                <li>Eleman semantik ak SEO</li>
                <li>Fòm ak validasyon</li>
                <li>Tab ak lis</li>
                <li>Entegrasyon medya</li>
                <li>Best practices ak accessibility</li>
            </ul>
            <p><strong>Rezilta aprantisaj:</strong></p>
            <p>Ap aprann an, w ap kapab kreye estrikti konplè yon sit web ak HTML.</p>
        `,
        'css': `
            <h3>CSS Stil ak Design - Detay Konplè</h3>
            <p><strong>Kisa w ap aprann:</strong></p>
            <ul>
                <li>Selectors ak specificity</li>
                <li>Box model ak positioning</li>
                <li>Flexbox ak Grid layout</li>
                <li>Responsive design ak media queries</li>
                <li>Animasyon ak transitions</li>
                <li>Variables CSS ak preprocessors</li>
            </ul>
            <p><strong>Rezilta aprantisaj:</strong></p>
            <p>W ap kapab kreye entèfas bèl, modèn, ak responsive.</p>
        `,
        'js': `
            <h3>JavaScript Dinamik - Detay Konplè</h3>
            <p><strong>Kisa w ap aprann:</strong></p>
            <ul>
                <li>Variables, fonksyon, ak kontwòl flow</li>
                <li>DOM manipulation ak events</li>
                <li>Async programming ak APIs</li>
                <li>Error handling ak debugging</li>
                <li>ES6+ features (arrow functions, promises, etc.)</li>
                <li>Pwojè final: yon aplikasyon web konplè</li>
            </ul>
            <p><strong>Rezilta aprantisaj:</strong></p>
            <p>W ap kapab devlope aplikasyon web dinamik ak JavaScript.</p>
        `
    };
    
    alert(descriptions[course]);
}

// Modal functionality
const registrationModal = document.getElementById('registration-modal');
const registrationForm = document.getElementById('registration-form');

function showRegistration() {
    if (registrationModal) {
        registrationModal.classList.add('open');
        document.body.classList.add('no-scroll');
        if (registrationForm) {
            const first = registrationForm.querySelector('#name');
            first && first.focus();
        }
    }
}

function closeModal() {
    if (registrationModal) {
        registrationModal.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === registrationModal) {
        closeModal();
    }
});

// Close modal on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// Form submission
if (registrationForm) {
    registrationForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Basic validation
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Modpas yo pa matche! Tanpri verifye.');
            return;
        }
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: password
        };
        
        try {
            // Send data to backend (you'll need to implement this endpoint)
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                const result = await response.json();
                alert('✅ Kont ou kreye avèk siksè! Ou pral resevwa enfòmasyon peyman nan imèl la.');
                closeModal();
                registrationForm.reset();
            } else {
                alert('❌ Gen yon erè. Tanpri eseye ankò.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('❌ Gen yon erè sou sèvè a. Tanpri eseye ankò pita.');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Payment simulation
function simulatePayment(userId, amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // In a real app, integrate with payment gateway like NatCash, MonCash, etc.
            const paymentSuccess = Math.random() > 0.1; // 90% success rate for demo
            
            if (paymentSuccess) {
                resolve({
                    success: true,
                    transactionId: 'TRX' + Date.now(),
                    message: 'Peyman an ranpli avèk siksè!'
                });
            } else {
                resolve({
                    success: false,
                    message: 'Peyman an echwe. Tanpri eseye ankò.'
                });
            }
        }, 2000);
    });
}