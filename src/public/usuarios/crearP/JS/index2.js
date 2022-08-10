/****elegir foto de perfil */
let f5 = document.querySelectorAll(".img_p")[0];
let c_5 = document.querySelectorAll(".img_f")[0];
let ct_5 = document.querySelectorAll(".foto_perfil")[0];
let subir = document.querySelectorAll(".subir")[0];
let requerido = document.querySelectorAll(".requerido")[0];
let foto = document.querySelectorAll(".fotos")[0];

let valor=0;
/****input 5******/
f5.addEventListener("click", function () {
    c_5.click();
})
c_5.addEventListener("change", function () {
    var files = this.files;
    valor=files.length;
    console.log(valor);
    visualizar(files[0]);
})

/*******funciones*******/
function visualizar(file) {
    var imgCodified = URL.createObjectURL(file);
    foto.style.display = "flex";
    f5.src=imgCodified;
}

subir.addEventListener("click", function () {
    if(valor===0){
        requerido.style.color="red";
        requerido.innerHTML="Debe elegir una imagen de portada";
    }
})
foto.addEventListener("click", function () {
    foto.style.display="none";
    f5.src="./usuarios/menu/icons/camera.png";

})
