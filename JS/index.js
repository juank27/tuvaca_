let home= document.getElementById('homes');
let cow= document.getElementById('cow');
let mail= document.getElementById('mail');

home.addEventListener('click',function(){
    home.style.backgroundImage='url("./icons/casa2.png")';
    home.style.transition="0.2s"
    mail.style.backgroundImage='url("./icons/mail.png")';
    mail.style.transition="0.2s";
    cow.style.backgroundImage='url("./icons/Cow-1.png")';
    cow.style.transition="0.2s";
})
cow.addEventListener('click',function(){
    home.style.backgroundImage='url("./icons/casa.png")';
    home.style.transition="0.2s";
    mail.style.backgroundImage='url("./icons/mail.png")';
    mail.style.transition="0.2s";
    cow.style.backgroundImage='url("./icons/Cow.png")';
    cow.style.transition="0.2s";
})
mail.addEventListener('click',function(){
    home.style.backgroundImage='url("./icons/casa.png")';
    home.style.transition="0.2s"
    mail.style.backgroundImage='url("./icons/mail2.png")';
    mail.style.transition="0.2s";
    cow.style.backgroundImage='url("./icons/Cow-1.png")';
    cow.style.transition="0.2s";
})


var valor=true;
var windowWidth = window.innerWidth;
 
/*if (windowWidth>=320&&windowWidth <=1000){
    console.log("entro")
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
        let slides = document.getElementsByClassName("contenido_p");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
    }
}*/