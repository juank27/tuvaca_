

let abrirSesion;
let id;
let cerrarSesion = document.querySelectorAll(".cerrar_modal_p")[0];
let buscando = document.querySelectorAll(".buscando")[0];
let modalSesion = document.querySelectorAll(".modal_container_p")[0];
let modalSesion2 = document.querySelectorAll(".modal_p")[0];
let publicación = document.getElementById("publicacion");
let id2 = document.getElementById("id2");
let framer = document.getElementById("framer");
let foto_perfil = document.getElementById("foto_perfil");
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    pub.style.backgroundImage=" url(./usuarios/menu/icons/Cow.png)";
}
buscando.addEventListener("click", function () {
    window.location = "/buscarPublicaciones";
})
function posicion(valor) {
    framer.contentDocument.location.reload(true);
    id = document.querySelectorAll(".id")[valor].value;
    id2.value = id;
    publicación.submit();
    setTimeout(function () {
        modal()
    }, 1000);
}
let perfils = document.querySelectorAll(".perfilS")[0];
function posicion2(valor) {
    console.log("entre");
    perfils.submit();
}
function posicion3(valor) {
    perfils.submit();
}

function modal() {
    framer.src += ''
    modalSesion.style.opacity = "1";
    modalSesion.style.visibility = "visible";
    modalSesion2.classList.toggle("modal_cerrado_p");
}
cerrarSesion.addEventListener("click", function () {
    modalSesion2.classList.toggle("modal_cerrado_p");
    setTimeout(function () {
        modalSesion.style.opacity = "0";
        modalSesion.style.visibility = "hidden";
        id.value = "";
    }, 500)
})

