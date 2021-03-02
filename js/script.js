const palabrasIzquierda = document.querySelectorAll(".lista-palabras li");
const recuadroNuevasPalabras = document.querySelector(".resultado");
let palabraClonada;

for (const palabra of palabrasIzquierda) {
  palabra.addEventListener("click", () => {
    clonaPalabra(palabra);
  });
}

const clonaPalabra = palabraAClonar => {
  palabraClonada = palabraAClonar.cloneNode(true);
  pegaPalabra(palabraClonada);
};

const pegaPalabra = palabraAPegar => {
  recuadroNuevasPalabras.append(palabraAPegar);
  mayuscular();
  palabraAPegar.addEventListener("click", () => {
    palabraAPegar.remove();
    mayuscular();
  });
};

const mayuscular = palabraAComprobar => {
  if (recuadroNuevasPalabras.children.length >= 0) {
    const primeraPalabra = document.querySelector(".resultado li");
    primeraPalabra.textContent = primeraPalabra.textContent.charAt(0).toUpperCase()
      + primeraPalabra.textContent.slice(1);
  }
};

const botonSubmit = document.querySelector(".boton-submit");

botonSubmit.disabled = true;

document.body.addEventListener("input", e => {
  if (e.target.classList.contains("input-palabra")) {
    if (e.target.value !== "") {
      botonSubmit.disabled = false;
    }
  }
});
