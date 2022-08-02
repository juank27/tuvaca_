let abrirSesion = document.querySelectorAll(".fotos")[0];
let cerrarSesion = document.querySelectorAll(".cerrar_modal_f")[0];
let modalSesion = document.querySelectorAll(".modal_container_f")[0];
let modalSesion2 = document.querySelectorAll(".modal_f")[0];
let atras = document.querySelectorAll(".atras")[0];

abrirSesion.addEventListener("click", function () {
    modalSesion.style.opacity = "1";
    modalSesion.style.visibility = "visible";
    modalSesion2.classList.toggle("modal_cerrado_f")
})

cerrarSesion.addEventListener("click", function () {
    modalSesion2.classList.toggle("modal_cerrado_f");
    setTimeout(function () {
        modalSesion.style.opacity = "0";
        modalSesion.style.visibility = "hidden";
    }, 900)
})
atras.addEventListener("click", function () {
    window.location.href="/misacarreos"
})