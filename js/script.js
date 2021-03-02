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
    contarPalabras();
    contarCaracteres();
    longitudMedia();
    esLenguajeProgramacion(palabra);
  });
}

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

/*

if (palabra.querySelector("[data-lenguaje=si]")) {
  if (palabra.textContent === "Javascript") {
    document.querySelector(".javascript").hidden = false;
    document.querySelector(".numero-lenguajes").textContent = palabra.length;
  }
  if (palabra.textContent === "Java") {
    document.querySelector(".java").hidden = false;
    document.querySelector(".numero-lenguajes").textContent = palabra.length;
  }
} else {
  console.log("hola");
}

*/
/*
//parte Bernat

const listaPalabras = document.querySelector(".lista-palabras");
const palabras = document.querySelectorAll(".lista-palabras li");
const botonSubmit = document.querySelector(".boton-submit");
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
