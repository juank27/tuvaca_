

let abrirSesion;
let id;
let cerrarSesion = document.querySelectorAll(".cerrar_modal_p")[0];
let buscando = document.querySelectorAll(".buscando")[0];
let modalSesion = document.querySelectorAll(".modal_container_p")[0];
let modalSesion2 = document.querySelectorAll(".modal_p")[0];
let publicación = document.getElementById("publicacion");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
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
    id = document.querySelectorAll(".id")[valor].value;
    id3.value = id;
    perfils.submit();
}
function posicion3(valor) {
    id = document.querySelectorAll(".id")[valor].value;
    id3.value = id;
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


/***recuperando datos para el chat *****/

function posicion4(valor) {
    let _name = document.querySelectorAll(".nombre")[valor].value;
    let phone = document.querySelectorAll(".phone")[valor].value;
    let updateAt = document.querySelectorAll(".updateAt")[valor].value;
    let raza = document.querySelectorAll(".raza")[valor].value;
    let categoria = document.querySelectorAll(".categoria")[valor].value;
    let precio = document.querySelectorAll(".precio")[valor].value;
    let yo = document.getElementById("yo");

    let url = "https://api.whatsapp.com/send?phone=57" + phone + "&text=Hola%20" + _name + ",%20yo%20soy%20" + yo.innerHTML + "%20y%20estoy%20interesado%20en%20la%20publicación%20que%20realizo%20el%20" + updateAt + ",%20el%20cual%20es%20" + categoria + "%20de%20raza%20" + raza + "%20con%20precio%20" + precio + ",%20me%20gustaría%20tener%20más%20información,%20muchas%20gracias.";
    window.open(url);
}