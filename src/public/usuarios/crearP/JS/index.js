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
    if (prenada.value === "Esta preñada" ) {
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
/************seleccionar fotos******/
let elegir = document.querySelectorAll(".insert_Foto")[0];
let imagen = document.querySelectorAll(".imagen")[0];
let limite = document.querySelectorAll(".limite")[0];
let filesI = document.getElementById("foto_publicacion");
let foto = document.querySelectorAll(".fotos")[0];
let modalf = document.querySelectorAll(".modal_f")[0];
var valor=false;
foto.addEventListener("click", function () {
    modalf.style.display="flex";
})
elegir.addEventListener("click", function () {
    filesI.disabled=valor;
    filesI.click();
})
let contador = 0;
let contador2 = 0;
var element2 ;
filesI.addEventListener("change", function () {
    console.log(this.files);
    var files = this.files;
    var element;
    for (var i = 0; i < files.length; i++) {
        element = files[i];
        element2=this.files;
        console.log(element2);

        if (files.length > 5 || contador === 5) {
        } else {
            createPreview(element);
            contador = contador + 1;
        }
    }
    if (files.length > 5 || contador===5) {
        valor=true;
        limite.innerText="El limite son 5 imagenes,si quiere subir otra tendra que eliminar una de las que ya selecciono";
    }
})

function createPreview(file) {
    var imgCodified = URL.createObjectURL(file);
    console.log(imgCodified);
    var img = $('<div class="cont_img"> <img src="' + imgCodified + '" class="imagen2""><div class="cerrar"><div class="cerrar2"></div></div></div>');
    $(img).insertBefore(".insert_Foto");
}
$(document).on("click", ".cont_img", function (e) {
    $(this).remove();
    contador = contador - 1;
    valor=false;
    limite.innerText="";
});
