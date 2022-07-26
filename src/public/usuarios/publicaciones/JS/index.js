

let abrirSesion;
let cerrarSesion = document.querySelectorAll(".cerrar_modal_p")[0];
let modalSesion = document.querySelectorAll(".modal_container_p")[0];
let modalSesion2 = document.querySelectorAll(".modal_p")[0];
let publicación=document.getElementById("publicacion");


function posicion(valor){
    abrirSesion = document.querySelectorAll(".publicacion_imagen")[valor];
    modalSesion.style.opacity = "1";
    modalSesion.style.visibility = "visible";
    modalSesion2.classList.toggle("modal_cerrado_p")
    publicación.submit();
}
cerrarSesion.addEventListener("click", function () {
    modalSesion2.classList.toggle("modal_cerrado_p");
    setTimeout(function () {
        modalSesion.style.opacity = "0";
        modalSesion.style.visibility = "hidden";
    }, 900)
})
