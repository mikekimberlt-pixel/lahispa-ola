// Declaramos las variables principales a nivel global para que todo el archivo las comparta
let index = 0;
let xInicial = null;
let slider = null;
let totalImagenes = 0;

// Creamos la función de movimiento a nivel global para que el HTML (onclick) pueda leerla siempre
window.moverSlider = function(direccion) {
    // Si el HTML llama a la función antes de que el slider exista en el DOM, evitamos el error
    if (!slider || totalImagenes === 0) return;

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

// Vinculamos los elementos del DOM e inicializamos el sistema táctil apenas la página cargue su estructura
document.addEventListener("DOMContentLoaded", () => {
    slider = document.getElementById('slider');
    
    if (!slider) {
        console.warn("No se encontró ningún elemento con el ID 'slider'.");
        return;
    }

    totalImagenes = slider.querySelectorAll('img').length;
    console.log(`Slider inicializado con éxito. Total de imágenes: ${totalImagenes}`);

    // --- SISTEMA TÁCTIL PARA CELULARES ---
    // Usamos directamente la variable 'slider' que ya encontramos arriba
    slider.addEventListener('touchstart', (e) => {
        xInicial = e.touches[0].clientX; // Corregido: accedemos al primer punto de contacto
    });

    slider.addEventListener('touchend', (e) => {
        if (!xInicial) return;

        let xFinal = e.changedTouches[0].clientX; // Corregido: accedemos al toque que cambió
        let diferenciaX = xInicial - xFinal;

        // Sensibilidad del deslizamiento (50 píxeles)
        if (Math.abs(diferenciaX) > 50) {
            if (diferenciaX > 0) {
                // Deslizó hacia la izquierda -> Siguiente imagen
                window.moverSlider(1);
            } else {
                // Deslizó hacia la derecha -> Anterior imagen
                window.moverSlider(-1);
            }
        }
        // Reiniciamos el punto inicial
        xInicial = null;
    });
});
