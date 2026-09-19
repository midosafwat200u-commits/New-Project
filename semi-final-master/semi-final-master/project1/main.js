document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.nav-icon');
    const navMenu = document.querySelector('.navbar-nav');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('phone-hide');
        });
    }

    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            const parentRow = card.closest('.row');
            if (parentRow) {
                parentRow.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            }
            card.classList.add('selected');
        });
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    const targetElements = document.querySelectorAll('section, header, footer, .option-card, .wizard-section, h1, h2, h3, p, img');
    targetElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
});