/************modal tres puntos******/
let abrirSesiona = document.querySelectorAll(".publicacion_mas")[0];
let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[0];
let modalSesion2b = document.querySelectorAll(".modal_container_t")[0];
let modalSesion22b = document.querySelectorAll(".modal_t")[0];
let foto_perfil = document.getElementById("foto_perfil");
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    per.style.boxShadow="0px 4px 4px 0px #A96224"
}
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
elimar.addEventListener("click", function () {
    subir.submit();
    console.log("subir");
})
no.addEventListener("click", function () {
    console.log("no");
    window.location="/misacarreos"
})
