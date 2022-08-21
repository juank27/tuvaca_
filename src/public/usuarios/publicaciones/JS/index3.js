/*Mostando Datos*/
let c=document.getElementById("c");
let op1=document.getElementById("opcion1");
let op2=document.getElementById("opcion2");
let op3=document.getElementById("opcion3");
let op4=document.getElementById("opcion4");
let op5=document.getElementById("op5");
let op6=document.getElementById("op2");

function vacas() {
    if(c.innerHTML==="Categoria: Vaca" || c.innerHTML==="Categoria: Novilla"){
        console.log("entre");
        op1.style.display='block';
        if(op6.innerHTML=="Esta preñada"){
            op2.style.display='block';
            if(op5.innerHTML==="Si es primeriza"){
                op3.style.display='block';
            }else{
                op4.style.display='block';
            }
        }
    }
}
window.load=vacas();


let slides1 = document.getElementsByClassName("centro");
let contar = slides1.length;
console.log(slides1[3].src)

    for (j = 0; j < slides1.length; j++) {
        if (slides1[j].src === "http://localhost:4000/type=%22%22") {
            contar = contar - 1;
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
    let slides = document.getElementsByClassName("centro");
    console.log(contar)
    if (n > contar) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < contar; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}