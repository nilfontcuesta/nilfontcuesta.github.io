const textElement = document.getElementById('text');
const menuElement = document.getElementById('menu');

const texts = [
    { content: "> Welcome", class: "large-text" },
    { content: "to the Nil Font i Cuesta website", class: "normal-text" },
    { content: "a Software Engineer who loves ☕​⛵🏔️", class: "samll-text" }
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
    typeText();
};

window.addEventListener('resize', adjustViewportHeight);