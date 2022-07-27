

let abrirSesion;
let id;
let publicación=document.getElementById("publicacion");
let id2=document.getElementById("id2");



function posicion(valor){
    abrirSesion = document.querySelectorAll(".publicacion_imagen")[valor];
    id = document.querySelectorAll(".id")[valor].value;
    id2.value=id
    console.log(id2.value);
    publicación.submit();
}