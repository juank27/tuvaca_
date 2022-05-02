/*****************************menu*******************************/
let home= document.getElementById('homes');
let cow= document.getElementById('cow');
let mail= document.getElementById('mail');
let body=document.getElementById('body');

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


window.onload = function () {
    function uno(){
        setTimeout(function(){
            document.getElementById("uno").style.visibility = "visible";
        },200
        )
        setTimeout(function(){
            document.getElementById("unoseis").style.visibility = "visible";
            document.getElementById("cinco").style.visibility = "visible";
        },400
        )
        setTimeout(function(){
            document.getElementById("nueve").style.visibility = "visible";
            document.getElementById("diez").style.visibility = "visible";
            document.getElementById("quince").style.visibility = "visible";
        },800
        )
        setTimeout(function(){
            document.getElementById("seis").style.visibility = "visible";
            document.getElementById("doce").style.visibility = "visible";
            document.getElementById("dos").style.visibility = "visible";
            document.getElementById("tres").style.visibility = "visible";
        },1200
        )
        setTimeout(function(){
            document.getElementById("ocho").style.visibility = "visible";
            document.getElementById("once").style.visibility = "visible";
            document.getElementById("cuatro").style.visibility = "visible";
            document.getElementById("catorce").style.visibility = "visible";
            document.getElementById("trece").style.visibility = "visible";
        },1400
        )
        setTimeout(function(){
            document.getElementById("uno").style.visibility = "hidden";
            document.getElementById("unoseis").style.visibility = "hidden";
            document.getElementById("cinco").style.visibility = "hidden";
            document.getElementById("nueve").style.visibility = "hidden";
            document.getElementById("diez").style.visibility = "hidden";
            document.getElementById("quince").style.visibility = "hidden";
            document.getElementById("seis").style.visibility = "hidden";
            document.getElementById("doce").style.visibility = "hidden";
            document.getElementById("dos").style.visibility = "hidden";
            document.getElementById("tres").style.visibility = "hidden";
            document.getElementById("ocho").style.visibility = "hidden";
            document.getElementById("once").style.visibility = "hidden";
            document.getElementById("cuatro").style.visibility = "hidden";
            document.getElementById("catorce").style.visibility = "hidden";
            document.getElementById("trece").style.visibility = "hidden";
        },1600
        )
    }
    let intervalo = setInterval(uno, 1700);
    /* function uno(){
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca4-M.jpg";
                document.getElementById("dos").src="./images/vacas/vaca1-M.jpg";
                document.getElementById("tres").src="./images/vacas/vaca2-M.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca6-M.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca3-M.jpg";
                document.getElementById("seis").src="./images/vacas/vaca7-M.jpg";
                document.getElementById("siete").src="./images/vacas/vaca8-M.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca5-M.jpg";
            },2000
            )
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca6-M.jpg";
                document.getElementById("dos").src="./images/vacas/vaca4-M.jpg";
                document.getElementById("tres").src="./images/vacas/vaca1-M.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca7-M.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca2-M.jpg";
                document.getElementById("seis").src="./images/vacas/vaca8-M.jpg";
                document.getElementById("siete").src="./images/vacas/vaca5-M.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca3-M.jpg";
            },4000
            )
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca7-M.jpg";
                document.getElementById("dos").src="./images/vacas/vaca6-M.jpg";
                document.getElementById("tres").src="./images/vacas/vaca4-M.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca8-M.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca1-M.jpg";
                document.getElementById("seis").src="./images/vacas/vaca5-M.jpg";
                document.getElementById("siete").src="./images/vacas/vaca3-M.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca2-M.jpg";
            },6000
            )
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca8-M.jpg";
                document.getElementById("dos").src="./images/vacas/vaca7-M.jpg";
                document.getElementById("tres").src="./images/vacas/vaca6-M.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca5-M.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca4-M.jpg";
                document.getElementById("seis").src="./images/vacas/vaca3-M.jpg";
                document.getElementById("siete").src="./images/vacas/vaca2-M.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca1-M.jpg";
            },8000
            )
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca5-M.jpg";
                document.getElementById("dos").src="./images/vacas/vaca8-M.jpg";
                document.getElementById("tres").src="./images/vacas/vaca7-M.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca3-M.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca6-M.jpg";
                document.getElementById("seis").src="./images/vacas/vaca2-M.jpg";
                document.getElementById("siete").src="./images/vacas/vaca1-M.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca4-M.jpg";
                console.log("5")
            },10000
            )
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca3-P.jpg";
                document.getElementById("dos").src="./images/vacas/vaca5-P.jpg";
                document.getElementById("tres").src="./images/vacas/vaca8-P.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca2-P.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca7-P.jpg";
                document.getElementById("seis").src="./images/vacas/vaca1-P.jpg";
                document.getElementById("siete").src="./images/vacas/vaca4-P.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca6-P.jpg";
                console.log("6")
            },12000
            )
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca2-P.jpg";
                document.getElementById("dos").src="./images/vacas/vaca3-P.jpg";
                document.getElementById("tres").src="./images/vacas/vaca5-P.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca1-P.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca8-P.jpg";
                document.getElementById("seis").src="./images/vacas/vaca4-P.jpg";
                document.getElementById("siete").src="./images/vacas/vaca6-P.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca7-P.jpg";
                console.log("7")
            },14000
            )
            setTimeout(function(){
                document.getElementById("uno").src="./images/vacas/vaca1-P.jpg";
                document.getElementById("dos").src="./images/vacas/vaca2-P.jpg";
                document.getElementById("tres").src="./images/vacas/vaca3-P.jpg";
                document.getElementById("cuatro").src="./images/vacas/vaca4-P.jpg";
                document.getElementById("cinco").src="./images/vacas/vaca5-P.jpg";
                document.getElementById("seis").src="./images/vacas/vaca6-P.jpg";
                document.getElementById("siete").src="./images/vacas/vaca7-P.jpg";
                document.getElementById("ocho").src="./images/vacas/vaca8-P.jpg";
                console.log("8")

            },16000
            )
        }
        let intervalo = setInterval(uno, 17000);
    function dos(){
        setTimeout(function(){
            document.getElementById("unoM").src="./images/granjas/granja4-M.jpg";
            document.getElementById("dosM").src="./images/granjas/granja1-M.jpg";
            document.getElementById("tresM").src="./images/granjas/granja2-M.jpg";
        },2000
        )
        setTimeout(function(){
            document.getElementById("unoM").src="./images/granjas/granja5-M.jpg";
            document.getElementById("dosM").src="./images/granjas/granja4-M.jpg";
            document.getElementById("tresM").src="./images/granjas/granja1-M.jpg";
        },4000
        )
        setTimeout(function(){
            document.getElementById("unoM").src="./images/granjas/granja6-M.jpg";
            document.getElementById("dosM").src="./images/granjas/granja5-M.jpg";
            document.getElementById("tresM").src="./images/granjas/granja4-M.jpg";
        },6000
        )
        setTimeout(function(){
            document.getElementById("unoM").src="./images/granjas/granja1-M.jpg";
            document.getElementById("dosM").src="./images/granjas/granja2-M.jpg";
            document.getElementById("tresM").src="./images/granjas/granja3-M.jpg";
        },8000
        )
    }
    let intervalo2 = setInterval(dos, 9000);*/


}



/*****************************modal de inicio de sesion*******************************/
let abrirSesion = document.querySelectorAll(".modal_IS_abrir")[0];
let cerrarSesion = document.querySelectorAll(".cerrar_modal_IS")[0];
let modalSesion = document.querySelectorAll(".modal_container_IS")[0];
let modalSesion2 = document.querySelectorAll(".modal_IS")[0];

abrirSesion.addEventListener("click", function () {

    modalSesion.style.opacity = "1";
    modalSesion.style.visibility = "visible";
    modalSesion2.classList.toggle("modal_cerrado_IS")
})
cerrarSesion.addEventListener("click", function () {
    modalSesion2.classList.toggle("modal_cerrado_IS");
    setTimeout(function () {
        modalSesion.style.opacity = "0";
        modalSesion.style.visibility = "hidden";
    }, 900)
})

/*****************************modal de Registro*******************************/
let abrirRegistro = document.querySelectorAll(".modal_R_abrir")[0];
let cerrarRegistro = document.querySelectorAll(".cerrar_modal_R")[0];
let modalRegistro = document.querySelectorAll(".modal_container_R")[0];
let modalRegistro2 = document.querySelectorAll(".modal_R")[0];

abrirRegistro.addEventListener("click", function () {

    modalRegistro.style.opacity = "1";
    modalRegistro.style.visibility = "visible";
    modalRegistro2.classList.toggle("modal_cerrado_R")
})
cerrarRegistro.addEventListener("click", function () {
    modalRegistro2.classList.toggle("modal_cerrado_R");
    setTimeout(function () {
        modalRegistro.style.opacity = "0";
        modalRegistro.style.visibility = "hidden";
    }, 900)
})
/*****************************modal municipios*******************************/
let municipios = document.querySelectorAll(".municipios")[0];
let modalMunicipio = document.querySelectorAll(".modal_container_M")[0];
let cerrarMunicipio = document.querySelectorAll(".cerrar_modal_M")[0];
let modalMunicipio2 = document.querySelectorAll(".modal_M")[0];

municipios.addEventListener("click", function () {

    modalMunicipio.style.opacity = "1";
    modalMunicipio.style.visibility = "visible";
    modalMunicipio2.classList.toggle("modal_cerrado_M")
})
cerrarMunicipio.addEventListener("click", function () {
    modalMunicipio2.classList.toggle("modal_cerrado_M");
    setTimeout(function () {
        modalMunicipio.style.opacity = "0";
        modalMunicipio.style.visibility = "hidden";
    }, 900)
})

let carupa = document.querySelectorAll(".carupa")[0];
let cucunuba = document.querySelectorAll(".cucunuba")[0];
let fuquene = document.querySelectorAll(".fuquene")[0];
let guacheta = document.querySelectorAll(".guacheta")[0];
let lenguazaque = document.querySelectorAll(".lenguazaque")[0];
let simijaca = document.querySelectorAll(".simijaca")[0];
let susa = document.querySelectorAll(".susa")[0];
let suta = document.querySelectorAll(".suta")[0];
let tausa = document.querySelectorAll(".tausa")[0];
let ubate = document.querySelectorAll(".ubate")[0];
let ubicación = document.querySelectorAll(".ubicación")[0];
carupa.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "4/3/5/4";
    ubicación.style.alignSelf= "start";
})
cucunuba.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "5/5/6/6";
    ubicación.style.alignSelf= "start";
})
fuquene.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "3/5/4/6";
    ubicación.style.alignSelf= "end";
})
guacheta.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "4/6/5/7";
    ubicación.style.alignSelf= "start";
})
lenguazaque.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "4/6/5/7";
    ubicación.style.alignSelf= "end";
})
simijaca.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "3/4/4/5";
    ubicación.style.alignSelf= "start";
})
susa.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "3/4/4/5";
    ubicación.style.alignSelf= "end";
})
suta.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "5/4/6/5";
    ubicación.style.alignSelf= "start";c

})
tausa.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "5/3/6/4";
    ubicación.style.alignSelf= "center";
})
ubate.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea= "4/4/5/5";
    ubicación.style.alignSelf= "end";

})

