document.body.addEventListener('click', function(event) {
    var menu = document.getElementById("menu");
    var header = document.querySelector("header");

    // Obtener el ancho actual de la ventana
    var windowWidth = window.innerWidth;

    // Verificar si el clic no fue en el menú ni en el botón del menú y la pantalla es pequeña
    if (!event.target.closest('#menu') && !event.target.classList.contains('menu-btn') && windowWidth <= 600) {
        menu.classList.remove('show');
        document.body.classList.remove('menu-open');
        header.classList.remove('column');
    }
});

function toggleMenu() {
    // Obtener el ancho actual de la ventana
    var windowWidth = window.innerWidth;

    // Verificar si la pantalla es pequeña antes de ejecutar toggleMenu
    if (windowWidth <= 600) {
        var menu = document.getElementById("menu");
        var body = document.body;
        var header = document.querySelector("header");

        menu.classList.toggle("show");
        body.classList.toggle("menu-open");
        header.classList.toggle("column");
    }
}

// Agregar eventos de clic a los enlaces y al botón "Contáctanos"
var links = document.querySelectorAll('.header-secciones a, .contacto-btn');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        toggleMenu();
    });
});
