const descriptionElement = document.getElementById('description');
const langSelectorElement = document.getElementById('resume-lang-selector');
const description = [
    { content: translate("resume-presentation-hello"), key: "resume-presentation-hello" },
    { content: translate("resume-presentation-professional"), key: "resume-presentation-professional" },
    { content: translate("resume-presentation-personal"),key: "resume-presentation-personal" },
]

const typingSpeed = 20; 

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeDescription() {
    if (currentTextIndex < description.length) {
        const currentLine = description[currentTextIndex];

        if (currentCharIndex === 0) {
            const lineDiv = document.createElement('p');
            lineDiv.id = `descriptionLine${currentTextIndex}`;
            lineDiv.setAttribute("data-i18n", currentLine.key);
            descriptionElement.appendChild(lineDiv); 
        }

        const lineDiv = document.getElementById(`descriptionLine${currentTextIndex}`);
        if (currentCharIndex < currentLine.content.length) {
            lineDiv.innerHTML += currentLine.content[currentCharIndex];
            currentCharIndex++;
            setTimeout(typeDescription, typingSpeed);
        } else {
            currentTextIndex++;
            currentCharIndex = 0;
            setTimeout(typeDescription, typingSpeed);
        }
    } else {
        langSelectorElement.removeAttribute("hidden")
    }
}

const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(item => {
    item.addEventListener('click', function() {
        const content = this.nextElementSibling;

        if (content.style.display === 'block') {
            content.style.display = 'none';
            this.classList.remove('active');
        } else {
            content.style.display = 'block';
            this.classList.add('active');
        }
    });
});


window.onload = () => {
    updateContent();
    typeDescription();
};