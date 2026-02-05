import { translate, updateContent } from './translations.js';

const textElement = document.getElementById('text');
const menuElement = document.getElementById('menu');
const langSelectorElement = document.getElementById('lang-selector');

var texts = [
    { content: translate("welcome-title"), class: "large-text", key:"welcome-title" },
    { content: translate("welcome-second"), class: "normal-text", key:"welcome-second" },
    { content: translate("welcome-third"), class: "samll-text", key:"welcome-third" }
]
const typingSpeed = 65; 

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
    if (currentTextIndex < texts.length) {
        const currentLine = texts[currentTextIndex];

        if (currentCharIndex === 0) {
            const lineDiv = document.createElement('div');
            lineDiv.classList.add(currentLine.class);
            lineDiv.id = `line${currentTextIndex}`;
            textElement.appendChild(lineDiv); 
        }

        const lineDiv = document.getElementById(`line${currentTextIndex}`);
        if (currentCharIndex < currentLine.content.length) {
            lineDiv.innerHTML += currentLine.content[currentCharIndex];
            currentCharIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            lineDiv.setAttribute("data-i18n", currentLine.key);
            updateContent();
            updateTextsContent();
            currentTextIndex++;
            currentCharIndex = 0;
            setTimeout(typeText, typingSpeed);
        }
    } else {
        menuElement.classList.remove('hidden');
    }
}

function updateTextsContent() {
    texts.forEach((item) => {
        item.content = translate(item.key);
    });
}

function adjustViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.onload = () => { 
    updateContent();
    adjustViewportHeight();
    typeText();
};

window.addEventListener('resize', adjustViewportHeight);