document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    let xInicial = null;

    // Buscamos los elementos del DOM apenas la estructura HTML esté lista
    const slider = document.getElementById('slider');
    
    // Si por alguna razón el slider no existe en la página actual, frenamos para evitar errores
    if (!slider) return;

    const totalImagenes = slider.querySelectorAll('img').length;

    // Tu función para mover el carrusel
    window.moverSlider = function(direccion) {
        index += direccion;

        if (index >= totalImagenes) {
            index = 0;
        }
        if (index < 0) {
            index = totalImagenes - 1;
        }

        const desplazamiento = -index * 100;
        slider.style.transform = `translateX(${desplazamiento}%)`;
    };

    // --- SISTEMA TÁCTIL PARA CELULARES ---
    const sliderContenedor = document.getElementById('slider'); // O el ID de tu contenedor principal

    if (sliderContenedor) {
        // Detecta cuándo el dedo toca la pantalla
        sliderContenedor.addEventListener('touchstart', (e) => {
            xInicial = e.touches[0].clientX;
        });

        // Detecta cuándo el dedo se mueve y se levanta
        sliderContenedor.addEventListener('touchend', (e) => {
            if (!xInicial) return;

            let xFinal = e.changedTouches[0].clientX;
            let diferenciaX = xInicial - xFinal;

            // Ajustá este valor (50) si querés que sea más o menos sensible al deslizar
            if (Math.abs(diferenciaX) > 50) {
                if (diferenciaX > 0) {
                    // Deslizó hacia la izquierda -> Siguiente imagen
                    moverSlider(1);
                } else {
                    // Deslizó hacia la derecha -> Anterior imagen
                    moverSlider(-1);
                }
            }
            // Reiniciamos el punto inicial
            xInicial = null;
        });
    }
});
