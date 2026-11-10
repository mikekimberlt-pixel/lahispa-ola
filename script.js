document.addEventListener("DOMContentLoaded", () => {
    // Esto fuerza a que el slider se posicione correctamente en la foto 0 al cargar
    moverSlide(0); 
});

let Index = 0;
let xInicial = null;

function moverSlide(direccion) {
  const slider = document.getElementById("slider");
  const totalImagenes = slider.querySelectorAll("a").length;

  Index += direccion;

  if (Index >= totalImagenes) { Index = 0; }
  if (Index < 0) { Index = totalImagenes - 1; }

  const desplazamiento = -Index * 100;
  slider.style.transform = `translateX(${desplazamiento}%)`;
}

// ---- SISTEMA TÁCTIL PARA CELULARES ----
let autoPlayInterval = setInterval(() => {
    moverSlide(1);
}, 4000);
const sliderContenedor = document.getElementById("slider");

// Detecta cuando el dedo toca la pantalla
sliderContenedor.addEventListener('touchstart', (e) => {
  xInicial = e.touches[0].clientX;
});

// Detecta cuando el dedo se mueve y se levanta
sliderContenedor.addEventListener('touchend', (e) => {
  if (!xInicial) return;

  let xFinal = e.changedTouches[0].clientX;
  let diferenciaX = xInicial - xFinal;

  // Si el deslizamiento es mayor a 50 píxeles, cambia de foto
  if (Math.abs(diferenciaX) > 50) {
    if (diferenciaX > 0) {
      moverSlide(1);  /* Deslizó a la izquierda -> Siguiente */
    } else {
      moverSlide(-1); /* Deslizó a la derecha -> Anterior */
    }
  }
  
  xInicial = null; // Reinicia el detector
});


let nombre = prompt("Por favor, introduce tu nombre");

if (nombre) {
    alert("Sea bienvenido " + nombre);
} else {
    alert("Sea bienvenido"); // Saludo genérico si cancela o lo deja vacío
}