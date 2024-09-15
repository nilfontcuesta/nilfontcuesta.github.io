const textElement = document.getElementById('text');
const menuElement = document.getElementById('menu');

const texts = [
    { content: translations[currentLanguage]["welcome-title"], class: "large-text", key:"welcome-title" },
    { content: translations[currentLanguage]["welcome-second"], class: "normal-text", key:"welcome-second" },
    { content: translations[currentLanguage]["welcome-third"], class: "samll-text", key:"welcome-third" }
]
const typingSpeed = 75; 

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
    if (currentTextIndex < texts.length) {
        const currentLine = texts[currentTextIndex];

        if (currentCharIndex === 0) {
            const lineDiv = document.createElement('div');
            lineDiv.classList.add(currentLine.class);
            lineDiv.id = `line${currentTextIndex}`;
            lineDiv.setAttribute("data-i18n", currentLine.key);
            textElement.appendChild(lineDiv); 
        }

        const lineDiv = document.getElementById(`line${currentTextIndex}`);
        if (currentCharIndex < currentLine.content.length) {
            lineDiv.innerHTML += currentLine.content[currentCharIndex];
            currentCharIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            currentTextIndex++;
            currentCharIndex = 0;
            setTimeout(typeText, typingSpeed);
        }
    } else {
        menuElement.classList.remove('hidden');
    }
}

function adjustViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.onload = () => {
    adjustViewportHeight();
    updateContent();
    typeText();
};

window.addEventListener('resize', adjustViewportHeight);