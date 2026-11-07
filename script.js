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
  let slideIndex = 0; // O el nombre de tu variable de posición actual

function moverSlide(direccion) {
    const slides = document.querySelectorAll('.slide'); // O tu clase de imágenes
    slideIndex += direccion;
    
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}
}

// ---- SISTEMA TÁCTIL PARA CELULARES ----
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
