

let abrirSesion;
let publicación=document.getElementById("publicacion");
let id = document.getElementById("id");


function posicion(valor){
    abrirSesion = document.querySelectorAll(".publicacion_imagen")[valor];
    console.log(id.value);
    publicación.submit();
}