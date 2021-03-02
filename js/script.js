const palabras = document.querySelectorAll(".lista-palabras li");
const nuevasPalabras = [];

for (const palabra of palabras) {
  const nuevaPalabra = palabra.cloneNode(true);
  palabra.addEventListener("click", () => {
    nuevasPalabras.push(nuevaPalabra.textContent);
    if (nuevaPalabra.textContent === nuevasPalabras[0]) {
      nuevaPalabra.textContent = nuevaPalabra.textContent.charAt(0).toUpperCase() + nuevaPalabra.textContent.slice(1);
    }
    document.querySelector(".resultado").append(nuevaPalabra);
  });
}
