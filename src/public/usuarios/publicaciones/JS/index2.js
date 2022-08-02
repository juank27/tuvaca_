/************modal tres puntos******/
let abrirSesiona = document.querySelectorAll(".publicacion_mas")[0];
let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[0];
let modalSesion2b = document.querySelectorAll(".modal_container_t")[0];
let modalSesion22b = document.querySelectorAll(".modal_t")[0];

abrirSesiona.addEventListener("click", function () {
    modalSesion2b.style.opacity = "1";
    modalSesion2b.style.visibility = "visible";
})

cerrarSesiona.addEventListener("click", function () {
    setTimeout(function () {
        modalSesion2b.style.opacity = "0";
        modalSesion2b.style.visibility = "hidden";
    }, 900)
})