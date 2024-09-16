const translations = {
    en: {
        "welcome-title": "> Welcome!",
        "welcome-second": "I'm Nil Font i Cuesta",
        "welcome-third": "a Software Engineer who loves ☕​⛵🏔️",
        "welcome-menu-resume": "Resume",
        "welcome-menu-linkedin": "LinkedIn",
        "resume-presentation-hello": "> Hey there, I'm Nil! 👋",
        "resume-presentation-professional": "I hold a degree in Computer Engineering, specializing in Software Engineering, with over 6 years of experience in the field. As a Backend Engineer, I'm passionate about software architecture and I'm currently pursuing a master's degree in Cybersecurity and Privacy.",
        "resume-presentation-personal": "On a personal level, I'm an ambitious person, always eager to learn and grow both professionally and personally. I really enjoy working in teams and place a lot of value on honesty, feedback, and sharing knowledge."
    },
    es: {
        "welcome-title": "> Bienvenido/a!",
        "welcome-second": "Soy Nil Font Cuesta",
        "welcome-third": "un Ingeniero del Software apasionado del ☕​⛵🏔️",
        "welcome-menu-resume": "Resumen",
        "welcome-menu-linkedin": "LinkedIn",
        "resume-presentation-hello": "> Hey there, I'm Nil! 👋",
        "resume-presentation-professional": "I hold a degree in Computer Engineering, specializing in Software Engineering, with over 6 years of experience in the field. As a Backend Engineer, I'm passionate about software architecture and I'm currently pursuing a master's degree in Cybersecurity and Privacy.",
        "resume-presentation-personal": "On a personal level, I'm an ambitious person, always eager to learn and grow both professionally and personally. I really enjoy working in teams and place a lot of value on honesty, feedback, and sharing knowledge."
    },
    ca: {
        "welcome-title": "> Benvingut/da!",
        "welcome-second": "Em dic Nil Font i Cuesta",
        "welcome-third": "sóc un Enginyer del Software apassionat del ☕​⛵🏔️",
        "welcome-menu-resume": "Resum",
        "welcome-menu-linkedin": "LinkedIn",
        "resume-presentation-hello": "> Hola, em dic Nil! 👋",
        "resume-presentation-professional": "Sóc Enginyer Informátic per la UPC, especialitzat en Enginyeria del Software. Ja tinc més de 6 anys d'experiència en el sector. Com a enginyer backend m'apassiona l'arquitectura del software i actualment també estic fent un màster en Ciberseguretat i Privadesa.",
        "resume-presentation-personal": "A nivell personal, sóc ambiciós, amb ganes de seguir aprenent i creixent tant professional com personalment. També sóc una persona que gaudeix molt del treball en equip, que valora molt l'honestedat, el feedback i compartir coneixements."
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

function translate(key) {
    var result = translations[currentLanguage][key]
    return result ? result: key;
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
