const palabras = document.querySelectorAll(".lista-palabras li");
const nuevasPalabras = [];

for (const palabra of palabras) {
  const nuevaPalabra = palabra.cloneNode(true);
  palabra.addEventListener("click", () => {
    if (document.querySelector(".resultado").children.length === 0) {
      nuevaPalabra.textContent = nuevaPalabra.textContent.charAt(0).toUpperCase() + nuevaPalabra.textContent.slice(1);
      document.querySelector(".resultado").append(nuevaPalabra);
    } else {
      /* nuevasPalabras.push(nuevaPalabra.textContent);
      if (nuevaPalabra.textContent === nuevasPalabras[0]) {
        nuevaPalabra.textContent = nuevaPalabra.textContent.charAt(0).toUpperCase() + nuevaPalabra.textContent.slice(1);
      } */
      document.querySelector(".resultado").append(palabra);
    }
    //parte Nerea
    contarPalabras();
    contarCaracteres();
    longitudMedia();
    esLenguajeProgramacion(palabra);
  });
}

const recuadroIzquierda = document.querySelector(".lista-palabras");
const recuadroNuevasPalabras = document.querySelector(".resultado");
let palabraClonada;

recuadroIzquierda.addEventListener("click", accion => {
  if (accion.target.parentElement === recuadroIzquierda) {
    clonaYPegaPalabra(accion.target);
  }
});

recuadroNuevasPalabras.addEventListener("click", accion => {
  if (accion.target.parentElement === recuadroNuevasPalabras) {
    accion.target.remove();
    mayuscular();
  }
});

const clonaYPegaPalabra = palabraAClonar => {
  palabraClonada = palabraAClonar.cloneNode(true);
  recuadroNuevasPalabras.append(palabraClonada);
  mayuscular();
};

const mayuscular = () => {
  if (recuadroNuevasPalabras.children.length >= 0) {
    const primeraPalabra = document.querySelector(".resultado li");
    primeraPalabra.textContent = primeraPalabra.textContent.charAt(0).toUpperCase()
      + primeraPalabra.textContent.slice(1);
  }
};

//parte Nerea
document.querySelector(".numero-palabras").textContent = 0;
document.querySelector(".numero-caracteres").textContent = 0;
document.querySelector(".longitud-media").textContent = 0;
document.querySelector(".numero-lenguajes").textContent = 0;

function contarPalabras() {
  const totalPalabras = document.querySelector(".resultado").children.length;
  document.querySelector(".numero-palabras").textContent = totalPalabras;
}
function contarCaracteres() {
  const sumaCaracteres = document.querySelector(".resultado").textContent.length;
  document.querySelector(".numero-caracteres").textContent = sumaCaracteres - 5;
} // por qué hay que restarle 5?? espacios??

function longitudMedia() {
  const longitudTotal = (document.querySelector(".resultado").textContent.length - 5);
  const totalPalabras = document.querySelector(".resultado").children.length;
  const calculaMedia = (longitudTotal / totalPalabras);
  document.querySelector(".longitud-media").textContent = calculaMedia.toFixed(2);
}

function esLenguajeProgramacion(palabra) {
  if (document.querySelector(".resultado").querySelectorAll("[data-lenguaje=si]").length !== 0) {
    document.querySelector(".numero-lenguajes").textContent = document.querySelector(".resultado").querySelectorAll("[data-lenguaje=si]").length;
    if (palabra.textContent === "JavaScript") {
      document.querySelector(".javascript").hidden = false;
    }
    if (palabra.textContent === "Java") {
      document.querySelector(".java").hidden = false;
    }
  }
}





// parte Bernat

const listaPalabras = document.querySelector(".lista-palabras");
const palabras = document.querySelectorAll(".lista-palabras li");
const botonSubmit = document.querySelector(".boton-submit");
const inputPalabra = document.querySelector(".input-palabra");
const numeroVeces = document.querySelector(".numero-veces");
const nuevasPalabras = [];

botonSubmit.disabled = true;

document.body.addEventListener("input", e => {
  if (e.target.classList.contains("input-palabra")) {
    if (e.target.value !== "") {
      botonSubmit.disabled = false;
    }
  }
});

document.body.addEventListener("click", e => {
  if (e.target.classList.contains("boton-submit")) {
    e.preventDefault();
    const palabraAAnyadir = palabras[0].cloneNode(true);
    palabraAAnyadir.textContent = inputPalabra.value;
    listaPalabras.append(palabraAAnyadir);
  }
});
*/
