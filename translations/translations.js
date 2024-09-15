const translations = {
    en: {
        "welcome-title": "> Welcome!",
        "welcome-second": "I'm Nil Font i Cuesta",
        "welcome-third": "a Software Engineer who loves ☕​⛵🏔️",
        "welcome-menu-resume": "Resume",
        "welcome-menu-linkedin": "LinkedIn"
    },
    es: {
        "welcome-title": "> Bienvenido/a!",
        "welcome-second": "Soy Nil Font Cuesta",
        "welcome-third": "un Ingeniero del Software apasionado del ☕​⛵🏔️",
        "welcome-menu-resume": "Resumen",
        "welcome-menu-linkedin": "LinkedIn"
    },
    ca: {
        "welcome-title": "> Benvingut/da!",
        "welcome-second": "Em dic Nil Font i Cuesta",
        "welcome-third": "sóc un Enginyer del Software apassionat del ☕​⛵🏔️",
        "welcome-menu-resume": "Resum",
        "welcome-menu-linkedin": "LinkedIn"
    }
};

let currentLanguage = 'en'; 

function updateContent() {
    const languageTranslations = translations[currentLanguage];  // Obtiene las traducciones para el idioma actual

    if (languageTranslations) {
        const elements = document.querySelectorAll('[data-i18n]');  // Selecciona todos los elementos con data-i18n
        elements.forEach((element) => {
            const key = element.getAttribute('data-i18n');  // Obtiene la clave de traducción
            element.textContent = languageTranslations[key] || key;  // Actualiza el texto del elemento
        });
    }
}

function changeLanguage(lang) {
    currentLanguage = lang;  
    localStorage.setItem('language', lang);  
    document.getElementById('selected-language').textContent = `${lang.toUpperCase()}`;
    updateContent(); 
}

function detectLanguage() {
    let language = localStorage.getItem('language');

    if (!language) {
        const browserLang = navigator.language.slice(0, 2);
        language = ['en', 'es', 'ca'].includes(browserLang) ? browserLang : 'en';
    }

    currentLanguage = language;
    document.getElementById('selected-language').textContent = `${language.toUpperCase()}`;
}

detectLanguage();

// LANGUAGE SELECTOR //

const languageSelect = document.querySelector('.language-select');
const dropdown = document.getElementById('dropdown');
const selectedLanguage = document.getElementById('selected-language');

selectedLanguage.addEventListener('click', () => {
    languageSelect.classList.toggle('open'); 
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
        const lang = event.target.getAttribute('data-lang');
        changeLanguage(lang);
        languageSelect.classList.remove('open');
    });
});
