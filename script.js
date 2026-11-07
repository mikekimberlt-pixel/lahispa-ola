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

window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-bienvenida');
    const btnIngresar = document.getElementById('btn-ingresar');
    const inputNombre = document.getElementById('input-nombre');

    // Función que procesa el nombre y genera el cartel flotante abajo
    function iniciarBienvenida() {
        let nombreUsuario = inputNombre.value.trim();
        
        if (!nombreUsuario) {
            nombreUsuario = "visitante";
        }

        // Ocultar el formulario con una transición suave
        modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
        setTimeout(() => modal.remove(), 500);

        // Crear el cartel de bienvenida en la esquina izquierda
        let saludo = document.createElement('div');
        saludo.innerText = `✨ ¡Sea bienvenido a Hispaniola, ${nombreUsuario}! ✨`;
        
        saludo.style.position = "fixed";
        saludo.style.bottom = "20px";
        saludo.style.left = "20px";
        saludo.style.backgroundColor = "#8B4513";
        saludo.style.color = "#ffffff";
        saludo.style.padding = "14px 28px";
        saludo.style.borderRadius = "25px";
        saludo.style.zIndex = "10000";
        saludo.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        saludo.style.fontWeight = "bold";
        saludo.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
        saludo.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        saludo.style.transform = "translateY(50px)";
        saludo.style.opacity = "0";

        document.body.appendChild(saludo);

        // Animación de entrada del cartelito
        setTimeout(() => {
            saludo.style.opacity = "1";
            saludo.style.transform = "translateY(0)";
        }, 100);

        // Desvanecer el cartelito después de 5 segundos
        setTimeout(() => {
            saludo.style.opacity = "0";
            saludo.style.transform = "translateY(20px)";
            setTimeout(() => saludo.remove(), 600);
        }, 5000);
    }

    // Al hacer clic en el botón
    btnIngresar.addEventListener('click', iniciarBienvenida);

    // Al presionar Enter dentro del cuadro de texto
    inputNombre.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            iniciarBienvenida();
        }
    });
});
