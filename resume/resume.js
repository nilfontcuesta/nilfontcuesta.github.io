const descriptionElement = document.getElementById('description');
const description = [
    { content: "> Hey there, I'm Nil! 👋" },
    { content: "I hold a degree in Computer Engineering, specializing in Software Engineering, with over 6 years of experience in the field. As a Backend Engineer, I'm passionate about software architecture and I'm currently pursuing a master's degree in Cybersecurity and Privacy." },
    { content: "On a personal level, I'm an ambitious person, always eager to learn and grow both professionally and personally. I really enjoy working in teams and place a lot of value on honesty, feedback, and sharing knowledge." },
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
    }
}


window.onload = () => {
    typeDescription();
};