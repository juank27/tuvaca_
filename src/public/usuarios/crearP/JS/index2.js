/****elegir foto de perfil */
let f5 = document.querySelectorAll(".img_p")[0];
let c_5 = document.querySelectorAll(".img_f")[0];
let ct_5 = document.querySelectorAll(".foto_perfil")[0];
let subir = document.querySelectorAll(".subir")[0];
let requerido = document.querySelectorAll(".requerido")[0];
let foto = document.querySelectorAll(".fotos")[0];
let atrasI = document.querySelectorAll(".atrasI")[0];
let tipoveh = document.getElementById("tipoveh");
let otro_R = document.getElementById("otro_R");
let foto_perfil = document.getElementById("foto_perfil");
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    per.style.boxShadow="0px 4px 4px 0px #A96224"
}
tipoveh.addEventListener("click", function () {
    if (tipoveh.value === "Otro") {
        otro_R.style.display = "flex";
        otro_R.required = true;
        tipoveh.required = false;
    } else {
        otro_R.style.display = "none";
        otro_R.required = false;
        tipoveh.required = true;
        otro_R.value=""
    }
})
atrasI.addEventListener("click", function () {
    window.location = "/misacarreos"
})
let valor = 0;
/****input 5******/
f5.addEventListener("click", function () {
    c_5.click();
})
c_5.addEventListener("change", function () {
    var files = this.files;
    valor = files.length;
    console.log(valor);
    visualizar(files[0]);
})

/*******funciones*******/
function visualizar(file) {
    var imgCodified = URL.createObjectURL(file);
    foto.style.display = "flex";
    f5.src = imgCodified;
    requerido.innerHTML = "";
}

subir.addEventListener("click", function () {
    if (valor === 0) {
        requerido.style.color = "red";
        requerido.innerHTML = "Debe elegir una imagen de portada";
    }
})
foto.addEventListener("click", function () {
    foto.style.display = "none";
    f5.src = "./usuarios/menu/icons/Camera.png";
    valor=0
    console.log(valor);
    
})
