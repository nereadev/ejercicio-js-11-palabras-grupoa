const listaPalabras = document.querySelector(".lista-palabras");
const palabras = document.querySelectorAll(".lista-palabras li");
const botonSubmit = document.querySelector(".boton-submit");
const inputPalabra = document.querySelector(".input-palabra");
const numeroVeces = document.querySelector(".numero-veces");
const nuevasPalabras = [];

for (const palabra of palabras) {
  const nuevaPalabra = palabra.cloneNode(true);
  palabra.addEventListener("click", () => {
    if (document.querySelector(".resultado").children.length === 0) {
      nuevaPalabra.textContent = nuevaPalabra.textContent.charAt(0).toUpperCase() + nuevaPalabra.textContent.slice(1);
    }
    /* nuevasPalabras.push(nuevaPalabra.textContent);
    if (nuevaPalabra.textContent === nuevasPalabras[0]) {
      nuevaPalabra.textContent = nuevaPalabra.textContent.charAt(0).toUpperCase() + nuevaPalabra.textContent.slice(1);
    } */
    document.querySelector(".resultado").append(nuevaPalabra);
    contarPalabras();
    contarCaracteres();
    longitudMedia();
  });
}

document.querySelector(".numero-palabras").textContent = 0;
document.querySelector(".numero-caracteres").textContent = 0;
document.querySelector(".longitud-media").textContent = 0;

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
