document.body.addEventListener('click', function(event) {
    var menu = document.getElementById("menu");
    var header = document.querySelector("header"); // Cambio aquí

    // Si el clic no fue en el menú ni en el botón del menú, cierra el menú
    if (!event.target.closest('#menu') && !event.target.classList.contains('menu-btn')) {
        menu.classList.remove('show');
        document.body.classList.remove('menu-open'); // Agregado para controlar el estilo del body
        header.classList.remove('column'); // Agregado para quitar la clase 'column' cuando se cierra el menú
    }
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    var body = document.body;
    var header = document.querySelector("header"); // Cambio aquí

    menu.classList.toggle("show");
    body.classList.toggle("menu-open"); // Agregado para controlar el estilo del body
    header.classList.toggle("column"); // Cambio aquí
}

// Agregar eventos de clic a los enlaces y al botón "Contáctanos"
var links = document.querySelectorAll('.header-secciones a, .contacto-btn'); // Agregado aquí
links.forEach(function(link) { // Agregado aquí
    link.addEventListener('click', function() { // Agregado aquí
        toggleMenu(); // Agregado aquí
    }); // Agregado aquí
}); // Agregado aquí
