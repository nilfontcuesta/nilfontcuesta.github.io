const translations = {
    en: {
        "welcome-title": "> Welcome!",
        "welcome-second": "I'm Nil Font i Cuesta",
        "welcome-third": "a Software Engineer who loves ☕​⛵🏔️",
        "welcome-menu-resume": "Resume",
        "welcome-menu-linkedin": "LinkedIn",
        "resume-name": "Nil Font i Cuesta",
        "resume-first-subtitle": "> Software Engineer:",
        "resume-second-subtitle": "6 years of experience",
        "resume-download-pdf": "Download PDF",
        "resume-presentation-hello": "> Hey there, I'm Nil! 👋",
        "resume-presentation-professional": "I hold a degree in Computer Engineering, specializing in Software Engineering, with over 6 years of experience in the field. As a Backend Engineer, I'm passionate about software architecture and I'm currently pursuing a master's degree in Cybersecurity and Privacy.",
        "resume-presentation-personal": "On a personal level, I'm an ambitious person, always eager to learn and grow both professionally and personally. I really enjoy working in teams and place a lot of value on honesty, feedback, and sharing knowledge.",
        "resume-subtitle-experience":"Main Experience",
        "wallapop-title": "Wallapop (Mar 2022 - Present)",
        "wallapop-description": " is a leading online platform for buying and selling second-hand products between individuals, with over 15 million active users per month. As a member of the Platform-Core team, my role is to develop and deliver new tools and services that are utilized across the entire platform.",
        "omatech-title": "Omatech (Abr 2019 - Mar 2022)",
        "omatech-description": " is a digital development company that specializes in creating custom technical solutions for businesses",
        "farmavet-title": "Farmavet (Jul 2018 - Feb 2019)",
        "farmavet-description": " is a digital development company that specializes in creating custom technical solutions for health and pharmacy businesses",
        "bcnquark-title": "BCN Quark (Jul 2017 - Feb 2019)",
        "bcnquark-description": " is a technology company dedicated to the development software.",
        "resume-subtitle-education": "Education",
        "resume-subtitle-miscellaneous": "Miscellaneous"
    },
    es: {
        "welcome-title": "> Bienvenido/a!",
        "welcome-second": "Soy Nil Font Cuesta",
        "welcome-third": "un Ingeniero del Software apasionado del ☕​⛵🏔️",
        "welcome-menu-resume": "Resumen",
        "welcome-menu-linkedin": "LinkedIn",
        "resume-name": "Nil Font Cuesta",
        "resume-first-subtitle": "> Ingeniero del Software:",
        "resume-second-subtitle": "con más de 6 años de experiencia",
        "resume-download-pdf": "Descargar PDF",
        "resume-presentation-hello": "> Hola, soy Nil! 👋",
        "resume-presentation-professional": "Soy Ingeniero Informático por la UPC, especializado en Ingeniería del Software. Tengo más de 6 años de experiencia en el sector y como Backend Engineer me apasiona la arquitectura del software. Actualmente también estoy cursando un máster en Ciberseguridad y Privacidad en la UOC",
        "resume-presentation-personal": "A nivel personal, soy ambiciosos, con ganas de seguir aprendiendo y creciendo a nivel profesional y personal. También soy una persona que disfruta mucho del trabajo en equipo, valoro mucho la honestidad, el buen feedback y compartir conocimiento.",
        "resume-subtitle-experience":"Experiencia",
        "wallapop-title": "Wallapop (Mar 2022 - Presente)",
        "wallapop-description": " es una plataforma online para comprar y vender porductos de segunda mano entre particulares con unos 15 millones de usuarios activos al mes. Como miembro del equipo de Platform-Core, mi tarea es diseñar y desarrollar nuevas herramientas y servicios que afecten a varias arias de la plataforma.",
        "omatech-title": "Omatech (Abr 2019 - Mar 2022)",
        "omatech-description": " es empresa de desarrollo digital especializada en crear soluciones técnicas personalizadas (web, apps...) para empresas.",
        "farmavet-title": "Farmavet (Jul 2018 - Feb 2019)",
        "farmavet-description": " es una consultora tecnológica especializada en proporcionar soluciones a empresas del sector sanitário y farmacéutico.",
        "bcnquark-title": "BCN Quark (Jul 2017 - Feb 2019)",
        "bcnquark-description": " es una empresa tecnológica con varios productos propios.",
        "resume-subtitle-education": "Educación",
        "resume-subtitle-miscellaneous": "Otros"
    },
    ca: {
        "welcome-title": "> Benvingut/da!",
        "welcome-second": "Em dic Nil Font i Cuesta",
        "welcome-third": "sóc un Enginyer del Software apassionat del ☕​⛵🏔️",
        "welcome-menu-resume": "Resum",
        "welcome-menu-linkedin": "LinkedIn",
        "resume-name": "Nil Font i Cuesta",
        "resume-first-subtitle": "> Enginyer del Software:",
        "resume-second-subtitle": "amb més de 6 anys d'experiència",
        "resume-download-pdf": "Descarregar PDF",
        "resume-presentation-hello": "> Hola, em dic Nil! 👋",
        "resume-presentation-professional": "Sóc Enginyer Informàtic per la UPC, especialitzat en Enginyeria del Software. Tinc més de 6 anys d'experiència en el sector. Com a enginyer backend m'apassiona l'arquitectura del software. Actualment també estic fent un màster en Ciberseguretat i Privadesa a la UOC",
        "resume-presentation-personal": "A nivell personal, sóc ambiciós, amb ganes de seguir aprenent i creixent tant professional com personalment. També sóc una persona que gaudeix molt del treball en equip, que valora molt l'honestedat, el feedback i compartir coneixements.",
        "resume-subtitle-experience":"Experiència",
        "wallapop-title": "Wallapop (Mar 2022 - Present)",
        "wallapop-description": " és una plataforma online per compra i vendre productes de segona má entre particulars amb uns 15 milions d'usuaris actius al mes. Com a membre de l'equip de Platform-Core, la meva tasca és dissenyar i desenvolupar noves eines i serveis que afecten a diverses arees de la plataforma.",
        "omatech-title": "Omatech (Abr 2019 - Mar 2022)",
        "omatech-description": " és una empresa de desenvolupament digital especialitzada en crear solucions tècniques personalitzades per a empreses (web, apps etc.)",
        "farmavet-title": "Farmavet (Jul 2018 - Feb 2019)",
        "farmavet-description": " és una consultora tecnològica especialitzada en proporcionar solucions a empreses del sector sanitari i farmacèutic.",
        "bcnquark-title": "BCN Quark (Jul 2017 - Feb 2019)",
        "bcnquark-description": " és  empresa tecnològica amb diversos productes propis",
        "resume-subtitle-education": "Educació",
        "resume-subtitle-miscellaneous": "Altres"
    }
};

let currentLanguage = 'en'; 

function updateContent() {
    const languageTranslations = translations[currentLanguage];

    if (languageTranslations) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((element) => {
            const key = element.getAttribute('data-i18n');
            element.textContent = languageTranslations[key] || key;
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
