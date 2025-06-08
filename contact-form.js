document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var modal = document.getElementById('modalConfirmacion');
    var cerrar = document.getElementById('cerrarModal');
    var botonCerrar = document.getElementById('botonCerrarModal');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.reset();
            modal.style.display = 'flex';
        });
    }
    if (cerrar) {
        cerrar.onclick = function() {
            modal.style.display = 'none';
        };
    }
    if (botonCerrar) {
        botonCerrar.onclick = function() {
            modal.style.display = 'none';
        };
    }
    // Cierra el modal si se hace clic fuera del contenido
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
