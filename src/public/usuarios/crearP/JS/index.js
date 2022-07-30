let categoria = document.getElementById("categoria");
let prenada = document.getElementById("prenada");
let tipoprenada=document.getElementById("tipoprenada");
let toro=document.getElementById("toro");
let semanas=document.getElementById("semanas");
let primeriza=document.getElementById("primeriza");
let nprenada=document.getElementById("nprenada");
categoria.addEventListener("click", function () {
    if (categoria.value === "Vaca" || categoria.value === "Novilla" ) {
        prenada.style.display = "flex";
    }else{
        prenada.style.display = "none";
        tipoprenada.style.display = "none";
        toro.style.display = "none";
        semanas.style.display = "none";
        primeriza.style.display = "none";
        nprenada.style.display = "none";
    }
})
prenada.addEventListener("click", function () {
    if (prenada.value === "Vaca preñada" ) {
        tipoprenada.style.display = "flex";
        toro.style.display = "flex";
        semanas.style.display = "flex";
        primeriza.style.display = "flex";
    }else{
        tipoprenada.style.display = "none";
        toro.style.display = "none";
        semanas.style.display = "none";
        primeriza.style.display = "none";
    }
})
primeriza.addEventListener("click", function () {
    if (primeriza.value === "No es primeriza" ) {
        nprenada.style.display = "flex";
    }else{
        nprenada.style.display = "none";
    }
})
let abrirSesion = document.querySelectorAll(".fotos")[0];
let cerrarSesion = document.querySelectorAll(".cerrar_modal_f")[0];
let modalSesion = document.querySelectorAll(".modal_container_f")[0];
let modalSesion2 = document.querySelectorAll(".modal_f")[0];

abrirSesion.addEventListener("click", function () {
    modalSesion.style.opacity = "1";
    modalSesion.style.visibility = "visible";
    modalSesion2.classList.toggle("modal_cerrado_f")
})

cerrarSesion.addEventListener("click", function () {
    modalSesion2.classList.toggle("modal_cerrado_f");
    setTimeout(function () {
        modalSesion.style.opacity = "0";
        modalSesion.style.visibility = "hidden";
    }, 900)
})