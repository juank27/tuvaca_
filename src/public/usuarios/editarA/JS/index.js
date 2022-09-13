/****elegir foto de perfil */
let f5 = document.querySelectorAll(".img_p")[0];
let c_5 = document.querySelectorAll(".img_f")[0];
let ct_5 = document.querySelectorAll(".foto_perfil")[0];
let subir = document.querySelectorAll(".subir")[0];
let requerido = document.querySelectorAll(".requerido")[0];
let foto = document.querySelectorAll(".fotos")[0];
let atrasI = document.querySelectorAll(".atrasI")[0];
let descripcion = document.getElementById("descripcion");
let tipoveh = document.getElementById("tipoveh");
let otro_R = document.getElementById("otro_R");
let ubate= document.getElementById("ubate");
let tausa= document.getElementById("tausa");
let suta= document.getElementById("suta");
let guacheta= document.getElementById("guacheta");
let lenguazaque= document.getElementById("lenguazaque");
let susa= document.getElementById("susa");
let simijaca= document.getElementById("simijaca");
let carupa= document.getElementById("carupa");
let cucunuba= document.getElementById("cucunuba");
let foto_perfil = document.getElementById("foto_perfil");
let ubater= document.getElementById("ubater");
let tausar= document.getElementById("tausar");
let sutar= document.getElementById("sutar");
let guachetar= document.getElementById("guachetar");
let lenguazaquer= document.getElementById("lenguazaquer");
let susar= document.getElementById("susar");
let simijacar= document.getElementById("simijacar");
let carupar= document.getElementById("carupar");
let cucunubar= document.getElementById("cucunubar");
let ubication= document.getElementById("ubication");
let ubicationr= document.getElementById("ubicationr");
let tipovehr= document.getElementById("tipovehr");
let descripcionr = document.getElementById("descripcionr");
let input0= document.getElementById("principal");


let veh= ['Furgon de estacas', 'Camioneta de estacas', 'Camioneta de platon', 'Frugon']
let es = true;
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    per.style.boxShadow="0px 4px 4px 0px #A96224"
    for (var i = 0; i < veh.length; i++) {
        if (tipovehr.value === veh[i]) {
            es = false
        }
    }
    if (es) {
        otro_R.style.display = "flex";
        otro_R.required = true;
        otro_R.value = tipovehr.value
        tipoveh.required=false
    } else {
        tipoveh.value = tipovehr.value
        otro_R.value=""

    }
    ubication.value=ubicationr.value
    ubate.value=ubater.value
    susa.value=susar.value
    suta.value=sutar.value
    tausa.value=tausar.value
    carupa.value=carupar.value
    simijaca.value=simijacar.value
    guacheta.value=guachetar.value
    susa.value=susar.value
    lenguazaque.value=lenguazaquer.value
    cucunuba.value=cucunubar.value
    if(descripcionr.value!==""){
        descripcion.value=descripcionr.value
    }
    foto.style.display = "flex";
    f5.src = input0.value;
    c_5.required=false;
    valor=1;
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
}

subir.addEventListener("click", function () {
    if (valor === 0) {
        requerido.style.color = "red";
        requerido.innerHTML = "Debe elegir una imagen de portada";
    }
    if (ubication.value !== ubicationr.value && ubication.value !== "") {
        ubicationr.value = ubication.value
    }
    if (tipoveh.value !== tipovehr.value && tipoveh.value !== "") {
        tipovehr.value = tipoveh.value
    }
    if (descripcion.value !== descripcionr.value) {
        descripcionr.value = descripcion.value
    }
    if (ubate.value !== ubater.value && ubate.value !== "") {
        ubater.value = ubate.value
    }
    if (carupa.value !== carupar.value && carupa.value !== "") {
        carupar.value = carupa.value
    }
    if (tausa.value !== tausar.value && tausa.value !== "") {
        tausar.value = tausa.value
    }
    if (suta.value !== sutar.value && suta.value !== "") {
        sutar.value = suta.value
    }
    if (lenguazaque.value !== lenguazaquer.value && lenguazaque.value !== "") {
        lenguazaquer.value = lenguazaque.value
    }
    if (guacheta.value !== guachetar.value && guacheta.value !== "") {
        guachetar.value = guacheta.value
    }
    if (simijaca.value !== simijacar.value && simijaca.value !== "") {
        simijacar.value = simijaca.value
    }
    if (susa.value !== susar.value && susa.value !== "") {
        susar.value = susa.value
    }
    if (cucunuba.value !== cucunubar.value && cucunuba.value !== "") {
        cucunubar.value = cucunuba.value
    }

})
foto.addEventListener("click", function () {
    foto.style.display = "none";
    f5.src = "./usuarios/menu/icons/Camera.png";
    input0.value=""
    valor=0
    c_5.required=true;
})
