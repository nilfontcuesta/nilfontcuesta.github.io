const textElement = document.getElementById('text');
const menuElement = document.getElementById('menu');

const texts = [
    { content: "Welcome", class: "large-text" },
    { content: "web under construction", class: "normal-text" },
    { content: "by Nil Font i Cuesta", class: "samll-text" }
]
const typingSpeed = 100; 

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

window.onload = () => {
    typeText();
};