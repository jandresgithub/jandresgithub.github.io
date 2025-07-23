/*const text = `> Iniciando sistema...\n> Cargando módulos de red...\n> Conexión establecida.\n> Bienvenido al portafolio de [Tu Nombre].\n> Ingeniero en Sistemas y Desarrollador Creativo.\n> Explorando tus habilidades y proyectos...\n\n`;

const typingElement = document.getElementById('typing');
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    let delay = (text.charAt(index - 1) === '\n') ? 400 : 50;
    setTimeout(type, delay);
  }
}

window.onload = () => {
  type();
};
*/


const textLines = [
  "> Iniciando sistema...",
  "> Cargando módulos de red...",
  "> Conexión establecida.",
  "> Bienvenido al portafolio de Jose Andrés.",
  "> Estudiante de Ingenieria en Sistemas.",
  "> Explorando habilidades y proyectos..."
];

let lineIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeLine() {
  if (lineIndex < textLines.length) {
    const line = textLines[lineIndex];
    if (charIndex < line.length) {
      typingElement.innerHTML += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 40);
    } else {
      typingElement.innerHTML += "<br>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 400);
    }
    
  } else {
    // ✅ Al terminar la animación del texto, activa la transición
    setTimeout(() => {
      document.getElementById("overlay").classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "sobre-mi.html";
      }, 800); // que coincida con la duración de la animación CSS
    }, 1000);
    
  }

  
}

window.onload = typeLine;

