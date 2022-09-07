/*Mostando Datos*/
let c = document.getElementById("c");
let op1 = document.getElementById("opcion1");
let op2 = document.getElementById("opcion2");
let op3 = document.getElementById("opcion3");
let op4 = document.getElementById("opcion4");
let op5 = document.getElementById("op5");
let op6 = document.getElementById("op2");

function vacas() {
    if (c.innerHTML === "Categoria: Vaca" || c.innerHTML === "Categoria: Novilla") {
        console.log("entre");
        op1.style.display = 'block';
        if (op6.innerHTML == "Esta preñada") {
            op2.style.display = 'block';
            op5.style.display = 'block';
        }
    }
}
window.load = vacas();
/***recuperando datos para el chat *****/

function posicion4() {
    let _name = document.querySelectorAll(".nombre")[0].value;
    let phone = document.querySelectorAll(".phone")[0].value;
    let updateAt = document.querySelectorAll(".updateAt")[0].value;
    let raza = document.querySelectorAll(".raza")[0].value;
    let categoria = document.querySelectorAll(".categoria")[0].value;
    let precio = document.querySelectorAll(".precio")[0].value;
    let yo = document.getElementById("yo");

    let url = "https://api.whatsapp.com/send?phone=57" + phone + "&text=Hola%20" + _name + ",%20yo%20soy%20" + yo.innerHTML + "%20y%20estoy%20interesado%20en%20la%20publicación%20que%20realizo%20el%20" + updateAt + ",%20el%20cual%20es%20" + categoria + "%20de%20raza%20" + raza + "%20con%20precio%20" + precio + ",%20me%20gustaría%20tener%20más%20información,%20muchas%20gracias.";
    window.open(url);
}

let slides = document.getElementsByClassName("centro");
// let img = document.getElementsByClassName("im");
// let vid = document.getElementsByClassName("vid");
let e_1 = document.getElementsByClassName("e");


function url_tipo(url) {
    let div = url.split("?");
    let div2 = div[0].split(".");
    let tipo = div2[div2.length - 1];
    return tipo;
}


for (var l = 0; l < e_1.length; l++) {
    if (e_1[l].innerHTML !== "") {
        if (url_tipo(e_1[l].innerHTML) === "mp4") {
            var salir1 = 0;
            var video= $('<video class="centro fade " controls id="centro"  src="'+e_1[l].innerHTML+'"></video>');
            $(video).insertBefore("#cambiar");

        } else {
            var salir = 0;
            var img= $('<img class="centro fade " id="centro" src="'+e_1[l].innerHTML+'">');
            $(img).insertBefore("#cambiar");

        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}