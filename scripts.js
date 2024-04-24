document.addEventListener('DOMContentLoaded', function() {
    // Código para el desplegable de ropa
    const menuRopa = document.getElementById('ropa');
    const subMenuRopa = document.getElementById('sub-menu-ropa');
    
    // Función para mostrar el submenú
    function mostrarSubMenu() {
        subMenuRopa.style.display = 'block';
    }
    
    // Función para ocultar el submenú
    function ocultarSubMenu() {
        subMenuRopa.style.display = 'none';
    }
    
    // Asignar los eventos al botón y al submenú
    menuRopa.addEventListener('mouseover', mostrarSubMenu);
    subMenuRopa.addEventListener('mouseleave', ocultarSubMenu);
    
    // Asignar evento mouseover también al submenú para mantenerlo abierto
    subMenuRopa.addEventListener('mouseover', mostrarSubMenu);

    // Asegúrate de agregar esto al documento cuando esté listo, por ejemplo dentro de DOMContentLoaded.
let indiceActual = 0;
const imagenes = document.querySelectorAll('.carrusel-imagen');
const totalImagenes = imagenes.length;

document.getElementById('carrusel-prev').addEventListener('click', function() {
    cambiarImagen(-1);
});

document.getElementById('carrusel-next').addEventListener('click', function() {
    cambiarImagen(1);
});

function cambiarImagen(cambio) {
    imagenes[indiceActual].style.display = 'none';
    indiceActual = (indiceActual + cambio + totalImagenes) % totalImagenes;
    imagenes[indiceActual].style.display = 'block';
}

});

