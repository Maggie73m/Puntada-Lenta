document.addEventListener("DOMContentLoaded", function() {
    let index = 0; /* Índice actual del carrusel */
    const carrusel = document.querySelector(".carrusel-contenido");
    const carruselImg = document.querySelectorAll(".carrusel-img");
    const prevButton = document.querySelector(".carrusel-prev");
    const nextButton = document.querySelector(".carrusel-next");

    function mostrarImagen(nuevoIndice) {
        if (nuevoIndice < 0) {
            nuevoIndice = carruselImg.length - 1; /* Regresa al último si es negativo */
        } else if (nuevoIndice >= carruselImg.length) {
            nuevoIndice = 0; /* Regresa al primero si excede el límite */
        }
        carrusel.style.transform = `translateX(${-nuevoIndice * 100}%)`; /* Desplaza el carrusel */
        index = nuevoIndice;
    }

    prevButton.addEventListener("click", function() {
        mostrarImagen(index - 1); /* Mueve a la imagen anterior */
    });

    nextButton.addEventListener("click", function() {
        mostrarImagen(index + 1); /* Mueve a la siguiente imagen */
    });
});
