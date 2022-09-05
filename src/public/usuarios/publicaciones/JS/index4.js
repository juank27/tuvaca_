let buscando = document.querySelectorAll(".buscando")[0];
let foto_perfil = document.getElementById("foto_perfil");
let id3 = document.getElementById("id3");

buscando.addEventListener("click", function () {
    window.location="/buscarAcarreos";
})
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
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    car.style.backgroundImage=" url(./usuarios/menu/icons/Truck2.png)";
}