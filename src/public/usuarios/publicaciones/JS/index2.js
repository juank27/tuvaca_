
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    per.style.boxShadow="0px 4px 4px 0px #A96224"
}
function posicion5(valor) {
    let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[valor];
    let modalSesion2b = document.querySelectorAll(".modal_container_t")[valor];
    let modalSesion22b = document.querySelectorAll(".modal_t")[valor];
    modalSesion2b.style.opacity = "1";
    modalSesion2b.style.visibility = "visible";
}
function posicion6(valor) {
    let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[valor];
    let modalSesion2b = document.querySelectorAll(".modal_container_t")[valor];
    let modalSesion22b = document.querySelectorAll(".modal_t")[valor];
    setTimeout(function () {
        modalSesion2b.style.opacity = "0";
        modalSesion2b.style.visibility = "hidden";
    }, 200)
}
/************modal elimar******/
let abrirEliminar = document.querySelectorAll(".eliminar")[0];
let modalElimar = document.querySelectorAll(".modal_container_e")[0];
let elimar = document.querySelectorAll(".si")[0];
let no= document.querySelectorAll(".no")[0];
let subir= document.getElementById("subido");


abrirEliminar.addEventListener("click", function () {
    modalElimar.style.opacity = "1";
    modalElimar.style.visibility = "visible";
})

no.addEventListener("click", function () {
    console.log("no");
    window.location="/misacarreos"
})
let perfils = document.querySelectorAll(".perfilS")[0];
function posicion2(valor) {
    id = document.querySelectorAll(".id")[valor].value;
    id3.value = id;
    perfils.submit();
}
let perfile = document.querySelectorAll(".perfilE")[0];
function posicionE(valor) {
    id = document.querySelectorAll(".id")[valor].value;
    id4.value = id;
    perfile.submit();
}