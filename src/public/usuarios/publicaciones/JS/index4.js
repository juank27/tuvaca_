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
function posicion4(valor) {
    let _name = document.querySelectorAll(".nombre")[valor].value;
    let phone = document.querySelectorAll(".phone")[valor].value;
    let categoria = document.querySelectorAll(".categoria")[valor].value;
    let yo = document.getElementById("yo");

    let url = "https://api.whatsapp.com/send?phone=57" + phone + "&text=Hola%20" + _name + ",%20yo%20soy%20" + yo.innerHTML + "%20y%20quisiera%20saber%20la%20tarifa%20para%20un%20acarreo%20con%20el%20vehiculo%20tipo%20" + categoria +",%20muchas%20gracias.";
    window.open(url);
}