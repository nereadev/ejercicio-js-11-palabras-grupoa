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
  });
}

document.body.addEventListener("change", e => {
  if (e.target.classList.contains("input-palabra") || e.target.classList.contains("numero-veces")) {
    if ((inputPalabra.value !== "") && (numeroVeces.value !== "")) {
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
