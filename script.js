// VCA - script.js konplè
console.log('Vibe Code Academy - Script Loading');

// 1. INITIALIZE
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Charged - Initialize everything');
    setupAllButtons();
    setupMobileMenu();
    setupDropdowns();
    setupForms();
    setupSmoothScroll();
    checkLoginStatus();
});

// 2. SETUP TOUT BOUTON YO
function setupAllButtons() {
    console.log('Setting up buttons...');
    
    // Bouton Enskri nan navbar
    const enskriBtn = document.getElementById('enskri-btn');
    if (!enskriBtn) {
        console.log('⚠️ Pa jwenn bouton enskri, ap chèche lòt fason...');
        // Chèche bouton enskri nan tout dokiman an
        document.querySelectorAll('a, button').forEach(element => {
            if (element.textContent.includes('Enskri') || 
                element.textContent.includes('enskri') ||
                element.textContent.includes('Enskri')) {
                console.log('📌 Bouton Enskri jwenn:', element.textContent);
                element.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Bouton Enskri klike');
                    showRegistration();
                });
            }
        });
    } else {
        enskriBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Bouton Enskri klike');
            showRegistration();
        });
    }
    
    // Bouton Konekte nan navbar
    const konekteBtn = document.getElementById('konekte-btn');
    if (!konekteBtn) {
        console.log('⚠️ Pa jwenn bouton konekte, ap chèche lòt fason...');
        document.querySelectorAll('a.nav-link').forEach(link => {
            if (link.textContent.includes('Konekte') || 
                link.textContent.includes('konekte')) {
                console.log('📌 Bouton Konekte jwenn:', link.textContent);
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Bouton Konekte klike');
                    showLogin();
                });
            }
        });
    } else {
        konekteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Bouton Konekte klike');
            showLogin();
        });
    }
    
    // Tout lòt bouton Enskri
    document.querySelectorAll('.btn-primary, .btn-large').forEach(btn => {
        if (btn.textContent.includes('Enskri') || 
            btn.textContent.includes('5,000') ||
            btn.textContent.includes('Gdes')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                showRegistration();
            });
        }
    });
    
    // Bouton "Plis Detay" nan kou yo
    document.querySelectorAll('.btn-outline').forEach(btn => {
        if (btn.textContent.includes('Detay') || 
            btn.textContent.includes('Plis')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const courseCard = btn.closest('.course-card');
                const courseTitle = courseCard ? courseCard.querySelector('.course-title').textContent : 'Kou a';
                alert(`Plis detay sou: ${courseTitle}\n\nKontni konplè, videyo, ak egzèsis ap disponib lè w enskri.`);
            });
        }
    });
}

// 3. FONKSYON PRENSIPAL
function showRegistration() {
    console.log('Opening registration...');
    const modal = document.getElementById('registration-modal');
    if (modal) {
        modal.style.display = 'block';
        console.log('✅ Modal ouvri');
    } else {
        console.log('❌ Modal pa jwenn, montre alert');
        alert(`
        🎓 Enskripsyon Vibe Code Academy
        
        Pri: 5,000 Gdes pou tout 3 fòmasyon yo
        
        Pou enskri:
        1. Kontakte nou nan: info@vca.ht
        2. Oswa rele: +509 34 00 0000
        3. W ap resevwa enfòmasyon peyman
        
        💡 Nan vèsyon konplè, yon fòm enskripsyon ap parèt isit.
        `);
    }
}

function showLogin() {
    console.log('Opening login...');
    alert(`
    🔐 Konekte Kont Ou
    
    Pou demonstrayon:
    - Imèl: etidyan@vca.ht
    - Modpas: aprann123
    
    💡 Nan vèsyon konplè, w ap kapab:
    1. Konekte ak kont w
    2. Aksede fòmasyon w
    3. Swiv pwogrè w
    
    Klike "Enskri" pou kreye yon nouvo kont.
    `);
}

// 4. SETUP MOBILE MENU
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            console.log('Mobile menu toggled');
        });
    }
}

// 5. SETUP DROPDOWNS
function setupDropdowns() {
    const formationBtn = document.getElementById('formation-btn');
    const formationDropdown = document.getElementById('formation-dropdown');
    
    if (formationBtn && formationDropdown) {
        formationBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = formationDropdown.style.display === 'block';
            formationDropdown.style.display = isVisible ? 'none' : 'block';
        });
        
        document.addEventListener('click', function() {
            formationDropdown.style.display = 'none';
        });
        
        formationDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// 6. SETUP FORMS
function setupForms() {
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Modpas yo pa matche!');
                return;
            }
            
            const userData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: new Date().toLocaleString()
            };
            
            // Save to localStorage
            localStorage.setItem('vca_last_registration', JSON.stringify(userData));
            
            alert(`
            ✅ Enskripsyon simule avèk siksè!
            
            Detay:
            👤 Non: ${userData.name}
            📧 Imèl: ${userData.name}
            📞 Tel: ${userData.phone}
            
            🎯 Ou ap resevwa:
            1. Enfòmasyon peyman 5,000 Gdes
            2. Aksè a 3 fòmasyon yo
            3. Sipò konplè
            
            💡 Nan vèsyon konplè, w ap peye ak
            MonCash/NatCash epi jwenn aksè imedya.
            `);
            
            closeModal();
            registrationForm.reset();
        });
    }
}

// 7. UTILITIES
function closeModal() {
    const modal = document.getElementById('registration-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function checkLoginStatus() {
    const user = localStorage.getItem('vca_user');
    if (user) {
        console.log('User logged in');
    }
}

// 8. INITIAL MESSAGE
console.log('VCA Script loaded successfully!');
