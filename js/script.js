
const botonMenu = document.querySelector("#boton-menu");
const menu = document.querySelector("#menu-principal");

botonMenu.addEventListener("click", function() {

    menu.classList.toggle("menu-abierto");

    const estaAbierto = menu.classList.contains("menu-abierto");

    botonMenu.setAttribute("aria-expanded", estaAbierto);

    botonMenu.setAttribute(
        "aria-label",
        estaAbierto ? "Cerrar menú" : "Abrir menú"
    );

});
