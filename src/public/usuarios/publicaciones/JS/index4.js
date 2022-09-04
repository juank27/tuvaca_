let buscando = document.querySelectorAll(".buscando")[0];
let foto_perfil = document.getElementById("foto_perfil");
buscando.addEventListener("click", function () {
    window.location="/buscarAcarreos";
})
let perfils = document.querySelectorAll(".perfilS")[0];
function posicion2(valor) {
    console.log("entre");
    perfils.submit();
}
function posicion3(valor) {
    perfils.submit();
}
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    car.style.backgroundImage=" url(./usuarios/menu/icons/Truck2.png)";
}