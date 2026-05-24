// Helper to get elements by selector
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Get all elements
const elements = {
    header: $('#header'),
    burgerBtn: $('#burgerBtn'),
    mobileMenu: $('#mobileMenu'),
    modal: $('#modal'),
    closeBtn: $('#closeBtn'),
    bookForm: $('#bookForm'),
    nameInput: $('#nameInput'),
    nameError: $('#nameError'),
    emailInput: $('#emailInput'),
    emailError: $('#emailError'),
    phoneInput: $('#phoneInput'),
    phoneError: $('#phoneError'),
    checkinInput: $('#checkinInput'),
    checkinError: $('#checkinError'),
    checkoutInput: $('#checkoutInput'),
    checkoutError: $('#checkoutError'),
    guestsSelect: $('#guestsSelect'),
    guestsError: $('#guestsError'),
    submitBtn: $('#submitBtn'),
    modalTimeout: $('#modalTimeout'),
    restartBtn: $('#restartBtn'),
    sliderPrev: $('#sliderPrev'),
    sliderNext: $('#sliderNext'),
    slider: $('#slider'),
    searchBtn: $('#searchBtn'),
    headerBookBtn: $('.header-actions .btn-primary'),
    searchCardBtn: $('#searchCardBtn'),
    searchTabs: $$('.search-tab'),
    ctaBtn: $('#ctaBtn'),
    timerEl: $('#timer'),
    roomBookBtns: $$('.room-card .btn-primary'),
    themeBtn: $('#themeBtn'),
    themeIcon: $('#themeIcon'),
    themeBtnMobile: $('#themeBtnMobile'),
    themeIconMobile: $('#themeIconMobile'),
    toastContainer: $('#toastContainer')
};

// ====== DARK MODE ======
const SUN_SVG = `<path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm9-9a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1zM4 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1zm14.657-5.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM7.05 16.95a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm11.314 1.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414zM7.05 7.05a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 0 1 6.343 4.93l.707.707a1 1 0 0 1 0 1.414z"/>`;
const MOON_SVG = `<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>`;

function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const svg = dark ? SUN_SVG : MOON_SVG;
    const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
    elements.themeIcon.innerHTML = svg;
    elements.themeBtn.setAttribute('aria-label', label);
    elements.themeIconMobile.innerHTML = svg;
    elements.themeBtnMobile.setAttribute('aria-label', label);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

applyTheme(localStorage.getItem('theme') === 'dark');

function toggleTheme() {
    applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
}
elements.themeBtn.addEventListener('click', toggleTheme);
elements.themeBtnMobile.addEventListener('click', toggleTheme);

// ====== TOAST ======
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = 'toast toast--' + (type || 'info');
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);

    setTimeout(function() {
        toast.classList.add('leaving');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3500);
}

// ====== STICKY HEADER ======
window.addEventListener('scroll', function() {
    elements.header.style.boxShadow = window.scrollY > 50 ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none';
});

// ====== BURGER MENU ======
elements.burgerBtn.addEventListener('click', function() {
    const isOpen = elements.mobileMenu.classList.toggle('active');
    elements.burgerBtn.setAttribute('aria-expanded', isOpen);
});

$$('.mobile-menu__link').forEach(function(link) {
    link.addEventListener('click', function() {
        elements.mobileMenu.classList.remove('active');
        elements.burgerBtn.setAttribute('aria-expanded', 'false');
    });
});

// ====== SEARCH CARD TABS ======
elements.searchTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        elements.searchTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        $$('.search-card__panel').forEach(function(panel) {
            panel.classList.toggle('active', panel.id === 'panel-' + target);
        });
    });
});

// Set today as minimum for search card check-in
(function() {
    const today = new Date().toISOString().split('T')[0];
    const checkinEl = $('#searchCheckin');
    const checkoutEl = $('#searchCheckout');
    if (checkinEl) {
        checkinEl.min = today;
        checkinEl.addEventListener('change', function() {
            if (checkoutEl) checkoutEl.min = checkinEl.value;
        });
    }
})();

// ====== SEARCH CARD BUTTON ======
if (elements.searchCardBtn) {
    elements.searchCardBtn.addEventListener('click', function() {
        $('#rooms').scrollIntoView({ behavior: 'smooth' });
    });
}

// ====== MODAL ======
function setTimedOut(expired) {
    elements.modalTimeout.hidden = !expired;
    elements.bookForm.hidden = expired;
    if (expired) {
        elements.timerEl.textContent = 'Timed out';
        elements.modal.classList.add('modal--timed-out');
    } else {
        elements.modal.classList.remove('modal--timed-out');
    }
}

function openModal() {
    if (!elements.modal.classList.contains('active')) {
        elements.modal.classList.add('active');
        setTimedOut(false);
        startTimer();
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        if (!elements.checkinInput.value) elements.checkinInput.value = today.toISOString().split('T')[0];
        if (!elements.checkoutInput.value) elements.checkoutInput.value = tomorrow.toISOString().split('T')[0];
    }
}

function closeModal() {
    elements.modal.classList.remove('active');
    stopTimer();
}

elements.restartBtn.addEventListener('click', function() {
    elements.bookForm.reset();
    setTimedOut(false);
    startTimer();
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    elements.checkinInput.value = today.toISOString().split('T')[0];
    elements.checkoutInput.value = tomorrow.toISOString().split('T')[0];
});

elements.searchBtn.addEventListener('click', function() {
    $('#rooms').scrollIntoView({ behavior: 'smooth' });
});
elements.ctaBtn.addEventListener('click', openModal);
if (elements.headerBookBtn) elements.headerBookBtn.addEventListener('click', openModal);
elements.roomBookBtns.forEach(function(btn) { btn.addEventListener('click', openModal); });
elements.closeBtn.addEventListener('click', closeModal);

elements.modal.addEventListener('click', function(e) {
    if (e.target === elements.modal) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.modal.classList.contains('active')) closeModal();
});

// ====== FORM VALIDATION ======
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name) {
    return name.trim().length >= 2 && /[a-zA-Z]/.test(name);
}

function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return /^[+\d][\d\s\-()+]{4,}$/.test(phone) && digits.length >= 6;
}

function showFieldError(input, errorEl, message) {
    input.classList.add('error');
    errorEl.textContent = message;
    errorEl.classList.add('show');
}

function clearFieldError(input, errorEl) {
    input.classList.remove('error');
    errorEl.classList.remove('show');
}

elements.nameInput.addEventListener('blur', function() {
    if (elements.nameInput.value && !validateName(elements.nameInput.value))
        showFieldError(elements.nameInput, elements.nameError, 'Name must contain at least 2 letters');
});
elements.nameInput.addEventListener('focus', function() { clearFieldError(elements.nameInput, elements.nameError); });

elements.emailInput.addEventListener('blur', function() {
    if (elements.emailInput.value && !validateEmail(elements.emailInput.value))
        showFieldError(elements.emailInput, elements.emailError, 'Invalid email address');
});
elements.emailInput.addEventListener('focus', function() { clearFieldError(elements.emailInput, elements.emailError); });

elements.phoneInput.addEventListener('blur', function() {
    if (elements.phoneInput.value && !validatePhone(elements.phoneInput.value))
        showFieldError(elements.phoneInput, elements.phoneError, 'Enter a valid phone number (e.g. +1 555 000 0000)');
});
elements.phoneInput.addEventListener('focus', function() { clearFieldError(elements.phoneInput, elements.phoneError); });

elements.checkinInput.addEventListener('change', function() {
    clearFieldError(elements.checkinInput, elements.checkinError);
    const today = new Date().toISOString().split('T')[0];
    if (elements.checkinInput.value < today) {
        showFieldError(elements.checkinInput, elements.checkinError, 'Check-in cannot be in the past');
    }
    if (elements.checkoutInput.value && elements.checkoutInput.value <= elements.checkinInput.value) {
        const next = new Date(elements.checkinInput.value);
        next.setDate(next.getDate() + 1);
        elements.checkoutInput.value = next.toISOString().split('T')[0];
    }
    elements.checkoutInput.min = elements.checkinInput.value;
});

elements.checkoutInput.addEventListener('change', function() {
    clearFieldError(elements.checkoutInput, elements.checkoutError);
    if (elements.checkinInput.value && elements.checkoutInput.value <= elements.checkinInput.value)
        showFieldError(elements.checkoutInput, elements.checkoutError, 'Check-out must be after check-in');
});

elements.guestsSelect.addEventListener('change', function() { clearFieldError(elements.guestsSelect, elements.guestsError); });

elements.bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    if (!validateName(elements.nameInput.value)) {
        showFieldError(elements.nameInput, elements.nameError, 'Name must contain at least 2 letters');
        valid = false;
    }
    if (!validateEmail(elements.emailInput.value)) {
        showFieldError(elements.emailInput, elements.emailError, 'Invalid email address');
        valid = false;
    }
    if (!validatePhone(elements.phoneInput.value)) {
        showFieldError(elements.phoneInput, elements.phoneError, 'Enter a valid phone number (e.g. +1 555 000 0000)');
        valid = false;
    }
    const today = new Date().toISOString().split('T')[0];
    if (!elements.checkinInput.value || elements.checkinInput.value < today) {
        showFieldError(elements.checkinInput, elements.checkinError, 'Please select a valid check-in date');
        valid = false;
    }
    if (!elements.checkoutInput.value || elements.checkoutInput.value <= elements.checkinInput.value) {
        showFieldError(elements.checkoutInput, elements.checkoutError, 'Check-out must be after check-in');
        valid = false;
    }
    if (!elements.guestsSelect.value) {
        showFieldError(elements.guestsSelect, elements.guestsError, 'Please select number of guests');
        valid = false;
    }
    if (!valid) return;

    closeModal();
    elements.bookForm.reset();
    showToast("Booking submitted! We'll be in touch shortly.", 'success');
});

// ====== SLIDER ======
elements.sliderNext.addEventListener('click', function() {
    elements.slider.scrollBy({ left: elements.slider.firstElementChild.offsetWidth + 24, behavior: 'smooth' });
});

elements.sliderPrev.addEventListener('click', function() {
    elements.slider.scrollBy({ left: -(elements.slider.firstElementChild.offsetWidth + 24), behavior: 'smooth' });
});

// ====== COUNTDOWN TIMER ======
let timerInterval;

function startTimer() {
    stopTimer();
    let seconds = 600;

    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        elements.timerEl.textContent = minutes + ':' + (secs < 10 ? '0' : '') + secs;
        seconds--;
        if (seconds < 0) {
            stopTimer();
            setTimedOut(true);
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

// ====== SCROLL ANIMATIONS ======
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

$$('.card, .review, .benefit-row').forEach(function(el) {
    observer.observe(el);
});

// ====== COOKIE BAR ======
(function() {
    var cookieBar = $('#cookieBar');
    var acceptBtn = $('#cookieAcceptBtn');
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookieBar.classList.add('cookie-bar--hidden');
    }
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBar.classList.add('cookie-bar--hidden');
    });
})();

// ====== GO TOP BUTTON ======
(function() {
    var goTopBtn = $('#goTopBtn');

    function getViewportHeight() {
        return window.innerHeight;
    }

    function toggleGoTop() {
        if (window.scrollY > getViewportHeight()) {
            goTopBtn.classList.add('go-top--visible');
        } else {
            goTopBtn.classList.remove('go-top--visible');
        }
    }

    window.addEventListener('scroll', toggleGoTop);
    window.addEventListener('resize', toggleGoTop);

    goTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
