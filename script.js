const textElement = document.getElementById('text');
const menuElement = document.getElementById('menu');
const texts = [
    "by Nil Font i Cuesta\n",
    "Welcome to my website\n",
    "under construction\n"
];
const typingSpeed = 100; 

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
    if (currentTextIndex < texts.length) {
        if (currentCharIndex < texts[currentTextIndex].length) {
            textElement.innerHTML += texts[currentTextIndex][currentCharIndex] === '\n' 
                ? '<br>' 
                : texts[currentTextIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            currentTextIndex++;
            currentCharIndex = 0;
            setTimeout(typeText, typingSpeed);
        }
    } else {
        // Show menu after all text is typed
        menuElement.classList.remove('hidden');
    }
}

window.onload = () => {
    typeText();
};
