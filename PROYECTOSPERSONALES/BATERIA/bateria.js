document.addEventListener('DOMContentLoaded', function () {
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo => {
        platillo.addEventListener('click', function () {
            // Agregar clase de animación al hacer clic
            platillo.classList.add('animacion-clic');

            // Eliminar la clase de animación después de un tiempo
            setTimeout(() => {
                platillo.classList.remove('animacion-clic');
            }, 300);
        });
    });
});