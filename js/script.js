const palabras = document.querySelectorAll(".lista-palabras li");
const nuevasPalabras = [];

for (const palabra of palabras) {
  const nuevaPalabra = palabra.cloneNode(true);
  palabra.addEventListener("click", () => {
    /*   if (document.querySelector(".resultado").children.length === 0) {
        nuevaPalabra.textContent = nuevaPalabra.textContent.charAt(0).toUpperCase() + nuevaPalabra.textContent.slice(1);
      } */
    nuevasPalabras.push(nuevaPalabra.textContent);
    if (nuevaPalabra.textContent === nuevasPalabras[0]) {
      nuevaPalabra.textContent = nuevaPalabra.textContent.charAt(0).toUpperCase() + nuevaPalabra.textContent.slice(1);
    }
    document.querySelector(".resultado").append(nuevaPalabra);
  });
  nuevaPalabra.addEventListener("click", () => {
    const posicionPalabra = nuevasPalabras.indexOf(nuevaPalabra.textContent);
    nuevasPalabras.splice(posicionPalabra, 1);
    nuevaPalabra.remove();
  });
}

const botonSubmit = document.querySelector(".boton-submit");

botonSubmit.disabled = true;

document.body.addEventListener("input", e => {
  if (e.target.classList.contains("input-palabra")) {
    if (e.target.value !== "") {
      botonSubmit.disabled = false;
    }
  }
});
