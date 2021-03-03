const recuadroIzquierda = document.querySelector(".lista-palabras");
const recuadroNuevasPalabras = document.querySelector(".resultado");
let palabraClonada;

recuadroIzquierda.addEventListener("click", accion => {
  if (accion.target.parentElement === recuadroIzquierda) {
    clonaYPegaPalabra(accion.target);
    if (accion.target.dataset.maxVeces) {
      accion.target.dataset.maxVeces -= 1;
      if (+accion.target.dataset.maxVeces === 0) {
        accion.target.remove();
      }
    }
  }
});

recuadroNuevasPalabras.addEventListener("click", accion => {
  if (accion.target.parentElement === recuadroNuevasPalabras) {
    resetCalculo();
    accion.target.remove();
    mayuscular();
    contarPalabras();
    contarCaracteres();
    longitudMedia();
    esLenguajeProgramacion(palabraClonada);
  }
});

const clonaYPegaPalabra = palabraAClonar => {
  palabraClonada = palabraAClonar.cloneNode(true);
  recuadroNuevasPalabras.append(palabraClonada);
  mayuscular();
  contarPalabras();
  contarCaracteres();
  longitudMedia();
  esLenguajeProgramacion(palabraClonada);
};

const mayuscular = () => {
  if (recuadroNuevasPalabras.children.length >= 0) {
    const primeraPalabra = document.querySelector(".resultado li");
    primeraPalabra.textContent = primeraPalabra.textContent.charAt(0).toUpperCase()
      + primeraPalabra.textContent.slice(1);
  }
};

resetCalculo();
function resetCalculo() {
  if (recuadroNuevasPalabras.children.length <= 1) {
    document.querySelector(".numero-palabras").textContent = 0;
    document.querySelector(".numero-caracteres").textContent = 0;
    document.querySelector(".longitud-media").textContent = 0;
    document.querySelector(".numero-lenguajes").textContent = 0;
  }
}

function contarPalabras() {
  const totalPalabras = recuadroNuevasPalabras.children.length;
  document.querySelector(".numero-palabras").textContent = totalPalabras;
}
function contarCaracteres() {
  const sumaCaracteres = recuadroNuevasPalabras.textContent.length;
  // console.log(recuadroNuevasPalabras.textContent.split(""));
  document.querySelector(".numero-caracteres").textContent = sumaCaracteres - 5;
} // por qué hay que restarle 5?? espacios?? consolea lo que está comentado

function longitudMedia() {
  const longitudTotal = (recuadroNuevasPalabras.textContent.length - 5);
  const totalPalabras = recuadroNuevasPalabras.children.length;
  const calculaMedia = (longitudTotal / totalPalabras);
  document.querySelector(".longitud-media").textContent = calculaMedia.toFixed(2);
}

function esLenguajeProgramacion(palabra) {
  if (recuadroNuevasPalabras.querySelectorAll("[data-lenguaje=si]").length !== 0) {
    document.querySelector(".numero-lenguajes").textContent = recuadroNuevasPalabras.querySelectorAll("[data-lenguaje=si]").length;
    if (palabra.textContent === "JavaScript") {
      document.querySelector(".javascript").hidden = false;
    }
    if (palabra.textContent === "Java") {
      document.querySelector(".java").hidden = false;
    }
  }
}

const palabras = document.querySelectorAll(".lista-palabras li");
const botonSubmit = document.querySelector(".boton-submit");
const inputPalabra = document.querySelector(".input-palabra");
const numeroVeces = document.querySelector(".numero-veces");
const esLenguaje = document.querySelector(".es-lenguaje");
const nuevasPalabras = [];

botonSubmit.disabled = true;

document.body.addEventListener("change", e => {
  if (e.target.classList.contains("input-palabra") || e.target.classList.contains("numero-veces")) {
    if ((inputPalabra.value !== "") && (numeroVeces.value !== "")) {
      botonSubmit.disabled = false;
    }
  }
});

/* una vez añadidas la cantidad de veces que se puede usar una palabra, hacer que en recuadroIzquierda.addEventListener
chequee la propiedad y reste uno y elimine etiqueta si llega a 0 veces */
document.body.addEventListener("click", e => {
  if (e.target.classList.contains("boton-submit")) {
    e.preventDefault();
    const palabraAAnyadir = palabras[0].cloneNode(true);
    palabraAAnyadir.textContent = inputPalabra.value;
    if (!(devuelvePalabrasIzquierda().includes(inputPalabra.value)) && !(inputPalabra.value.includes(" "))) {
      if ((numeroVeces.value === "1") || (numeroVeces.value === "2") || (numeroVeces.value === "3")) {
        palabraAAnyadir.dataset.maxVeces = +numeroVeces.value;
      }
      if (esLenguaje.checked) {
        palabraAAnyadir.setAttribute("data-lenguaje", "si");
      }
      recuadroIzquierda.append(palabraAAnyadir);
    } else {
      console.log("No puedes incluir una palabra ya existente o con espacios.");
      /* mirar como se lanzan los toasts desde el submit, por ejemplo si no esta el required */
    }
  }
});

/* si creas una palabra nueva esta si que puede ser puesta mas de una vez, solucionar */
const devuelvePalabrasIzquierda = () => {
  const palabrasIzquierda = recuadroIzquierda.textContent.split("\n      ");
  palabrasIzquierda.shift();
  palabrasIzquierda[palabrasIzquierda.length - 1] = palabrasIzquierda[palabrasIzquierda.length - 1]
    .replace("\n    ", "");
  return palabrasIzquierda;
};
