
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    per.style.boxShadow="0px 4px 4px 0px #A96224"
}
/****tres puntos */
/**abrir */
function posicion5(valor) {
    let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[valor];
    let modalSesion2b = document.querySelectorAll(".modal_container_t")[valor];
    let modalSesion22b = document.querySelectorAll(".modal_t")[valor];
    modalSesion2b.style.opacity = "1";
    modalSesion2b.style.visibility = "visible";
}
/**cerrar */
function posicion6(valor) {
    let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[valor];
    let modalSesion2b = document.querySelectorAll(".modal_container_t")[valor];
    let modalSesion22b = document.querySelectorAll(".modal_t")[valor];
    setTimeout(function () {
        modalSesion2b.style.opacity = "0";
        modalSesion2b.style.visibility = "hidden";
    }, 200)
}
/****opcion editar */
function posicion2(valor) {
    let perfils = document.getElementById("perfilS");
    id = document.querySelectorAll(".id")[valor].value;
    id3 = document.getElementById("id3");
    console.log(id);
    id3.value = id;
    console.log(id3.value);
    perfils.click();
}
/******opcion eliminar */
function eliminar(valor) {
    let modalElimar = document.querySelectorAll(".modal_container_e")[valor];
    modalElimar.style.opacity = "1";
    modalElimar.style.visibility = "visible";
}
function posicionE(valor) {
    let perfile = document.getElementById("perfilE");
    id = document.querySelectorAll(".id")[valor].value;
    let id4 = document.getElementById("id4");
    id4.value = id;
    perfile.click();
}
function eliminarS(valor) {
    window.location="/misacarreos"
}
