let categoria = document.getElementById("categoria");
let prenada = document.getElementById("prenada");
let tipoprenada = document.getElementById("tipoprenada");
let toro = document.getElementById("toro");
let raza = document.getElementById("raza");
let otro_R = document.getElementById("otro_R");
let otro_T = document.getElementById("otro_T");
let semanas = document.getElementById("semanas");
let nprenada = document.getElementById("nprenada");
let ubication = document.getElementById("ubication");
let edad_es = document.getElementById("edad_es");
let descripcion = document.getElementById("descripcion");
let edad = document.getElementById("edad");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let foto_perfil = document.getElementById("foto_perfil");

categoria.addEventListener("click", function () {
    if (categoria.value === "Vaca" || categoria.value === "Novilla") {
        prenada.style.display = "flex";
        prenada.required = true;
    } else {
        prenada.style.display = "none";
        prenada.requires = false;
        tipoprenada.style.display = "none";
        toro.style.display = "none";
        semanas.style.display = "none";
        nprenada.style.display = "none";
        tipoprenada.required = false;
        toro.required = false;
        semanas.required = false;
        nprenada.required = false;
    }
    if (categoria.value === "Toro" || categoria.value === "Vaca" || categoria.value === "Ternera" || categoria.value === "Ternero") {
        if (categoria.value === "Ternera" || categoria.value === "Ternero") {
                anos.style.display = "flex";
                anos.value="meses"
                edad_es.required=false;
                anos.disabled=true;
                edad_es.style.display = "none";
        }else{

            anos.style.display = "flex";
            anos.value = "años"
            edad_es.required = false;
            anos.disabled = true;
            edad_es.style.display = "none";
        }
    } else {
        edad_es.style.display = "flex";
        anos.style.display = "none";
        edad_es.required = true;
    }
})
prenada.addEventListener("click", function () {
    if (prenada.value === "Esta preñada") {
        tipoprenada.style.display = "flex";
        toro.style.display = "flex";
        semanas.style.display = "flex";
        nprenada.style.display = "flex";
        tipoprenada.required = true;
        toro.required = true;
        semanas.required = true;
        nprenada.required = true;
    } if (prenada.value === "No esta preñada" || prenada.value === "") {
        tipoprenada.style.display = "none";
        toro.style.display = "none";
        semanas.style.display = "none";
        primeriza.style.display = "none";
        tipoprenada.required = false;
        toro.required = false;
        semanas.required = false;
        nprenada.required = false;
        otro_R.required = false;
    }
})
raza.addEventListener("click", function () {
    if (raza.value === "Otra") {
        otro_R.style.display = "flex";
        otro_R.required = true;
        raza.required = false;
    } else {
        otro_R.style.display = "none";
        otro_R.required = false;
        raza.required = true;
    }
})
toro.addEventListener("click", function () {
    if (toro.value === "Otra") {
        otro_T.style.display = "flex";
        otro_T.required = true;
        toro.required = false;
    } else {
        otro_T.style.display = "none";
        otro_T.required = false;
        toro.required = true;
    }
})
/************seleccionar fotos******/
let principal = document.querySelectorAll(".img_p")[0];
let subir = document.querySelectorAll(".actualizar")[0];
let foto = document.querySelectorAll(".fotos")[0];
let requerido = document.querySelectorAll(".requerido")[0];
let separador = document.querySelectorAll(".separador")[0];

let modalf = document.querySelectorAll(".modal_f")[0];
principal.addEventListener("click", function () {
    modalf.style.display = "flex";
})

/*******input 1***** */
let IF_1 = document.querySelectorAll(".IF_1")[0];
let f1 = document.querySelectorAll(".f1")[0];
let mas = document.querySelectorAll(".mas")[0];
/*******input 2***** */
let IF_2 = document.querySelectorAll(".IF_2")[0];
let f2 = document.querySelectorAll(".f2")[0];
let c_2 = document.querySelectorAll(".c_2")[0];
let ct_2 = document.querySelectorAll(".ct_2")[0];
let im2 = document.querySelectorAll(".im_2")[0];
let vd2 = document.querySelectorAll(".vd_2")[0];
/*******input 3***** */
let IF_3 = document.querySelectorAll(".IF_3")[0];
let f3 = document.querySelectorAll(".f3")[0];
let c_3 = document.querySelectorAll(".c_3")[0];
let ct_3 = document.querySelectorAll(".ct_3")[0];
let im3 = document.querySelectorAll(".im_3")[0];
let vd3 = document.querySelectorAll(".vd_3")[0];
/*******input 4***** */
let IF_4 = document.querySelectorAll(".IF_4")[0];
let f4 = document.querySelectorAll(".f4")[0];
let c_4 = document.querySelectorAll(".c_4")[0];
let ct_4 = document.querySelectorAll(".ct_4")[0];
let im4 = document.querySelectorAll(".im_4")[0];
let vd4 = document.querySelectorAll(".vd_4")[0];
/*******input 5***** */
let IF_5 = document.querySelectorAll(".IF_5")[0];
let f5 = document.querySelectorAll(".f5")[0];
let c_5 = document.querySelectorAll(".c_5")[0];
let ct_5 = document.querySelectorAll(".ct_5")[0];
let im5 = document.querySelectorAll(".im_5")[0];
let vd5 = document.querySelectorAll(".vd_5")[0];
let limite = document.querySelectorAll(".limite")[0];

/*******datos rescatados***** */
let ubicationr = document.getElementById("ubicationr")
let categoriar = document.getElementById("categoriar")
let edadr = document.getElementById("edadr")
let razar = document.getElementById("razar")
let productor = document.getElementById("productor")
let prenadar = document.getElementById("prenadar")
let tipoprenadar = document.getElementById("tipoprenadar")
let precior= document.getElementById("precior")
let toror = document.getElementById("toror")
let nprenadasr = document.getElementById("nprenadasr")
let mesesr = document.getElementById("mesesr")
let multi = document.getElementsByClassName("multi")
let descripcionr = document.getElementById("descripcionr");
let otro_Rr = document.getElementById("otro_Rr");
let otro_Tr = document.getElementById("otro_Tr");
let input0= document.getElementById("principal");
let razas = ['Angus', 'Brahman', 'Gyr', 'Holstein', 'Ayrshire', 'Jersey', 'Simental', 'Normando', 'Pardo Suizo', 'Cebu']
let es = true;
let es2 = true;

function cargar() {
    /**pefil */
    per.style.backgroundImage = (`url(${foto_perfil.value})`);
    crear.style.backgroundImage = "url(./usuarios/menu/icons/Sum2.png)";

    /**editar datos */
    for (var i = 0; i < razas.length; i++) {
        if (razar.value === razas[i]) {
            es = false
        }
    }
    if (es) {
        otro_R.style.display = "flex";
        otro_R.required = true;
        otro_R.value = razar.value
        raza.required=false
    } else {
        raza.value = razar.value

    }
    ubication.value = ubicationr.value;
    categoria.value = categoriar.value
    precio.value=precior.value
    let text=edadr.value
    let toros=toror.value
    let dividirE = text.split(" ");
    let div2= toros.split("Con toro ")
    if (categoria.value === "Toro" || categoria.value === "Vaca" || categoria.value === "Ternera" || categoria.value === "Ternero") {
        if (categoria.value === "Ternera" || categoria.value === "Ternero") {
                anos.style.display = "flex";
                anos.value="meses"
                edad_es.required=false;
                anos.disabled=true;
                edad_es.style.display = "none";
        }else{

            anos.style.display = "flex";
            anos.value = "años"
            edad_es.required = false;
            anos.disabled = true;
            edad_es.style.display = "none";
        }
    } else {
        edad_es.style.display = "flex";
        anos.style.display = "none";
        edad_es.required = true;
    }
    edad.value = dividirE[0]
    producto.value = productor.value
    if(descripcionr.value!==""){
        descripcion.value=descripcionr.value
    }
    precio.value = precio.value
    if (categoriar.value === "Vaca" || categoriar.value === "Novilla") {
        prenada.style.display = "block";
        prenada.value = prenadar.value
        if (prenadar.value == "Esta preñada") {
            console.log("aquie");
            tipoprenada.style.display = "flex";
            for (var i = 0; i < razas.length; i++) {
                if (div2[1] === razas[i]) {
                    es2 = false
                }
            }
            if (es2) {
                otro_T.style.display = "flex";
                otro_T.required = true;
                otro_T.value = div2[1]
                toro.required=false
            } else {
                console.log(typeof(div2[1]));
                toro.value =div2[1]
                console.log(toro.value);
            }
            semanas.style.display = "flex";
            nprenada.style.display = "flex";
            tipoprenada.value = tipoprenadar.value;
            semanas.value = mesesr.value;
            nprenada.value = nprenadasr.value;
        }
    }
    modalf.style.display = "flex";
    separador.style.display = "none";
    requerido.style.display = "none";
    IF_1.style.display = "none";
    foto.style.display = "flex";
    principal.src=input0.value
    let num=0
    if(multi[0].value!==""){
        console.log(1);
        f22(multi[0].value)
    }
    if (multi[1].value!=="") {
        console.log(2);
        f33(multi[1].value)
    }
    if (multi[2].value!=="") {
        console.log(3);
        f44(multi[2].value)
    }
    if (multi[3].value!=="") {
        console.log(4);
        f55(multi[3].value)
    }
    // console.log(multi.length);
    // for(var j=0;j<multi.length;j++){
    //     console.log("for");
    //     if(multi[j].value!==""){
    //         console.log("entre");
    //         num++
    //         metodo(num,multi[j].value)
    //     }
    // }
}

/*******posicion***** */
let array1 = [1, 2, 3, 4];
let array2 = [0, 0, 0, 0];
let valor = 0;

/****input 1******/
IF_1.addEventListener("click", function () {
    f1.click();
})
f1.addEventListener("change", function () {
    var files = this.files;
    valor = files.length;
    console.log(valor);
    visualizar2(files[0]);
})

/****agregar imagenes*****/
mas.addEventListener("click", function () {
    let posicion;
    limite.style.color = "red";
    for (var i = 0; i <= 4; i++) {
        if (array1[i] === (i + 1)) {
            posicion = array1[i];
            if (i === 3) {
            }
            break;
        }
    }
    /*****mostrar las camaras****/
    switch (posicion) {
        case 1:
            limite.innerHTML = "";
            IF_2.style.display = "flex";
            break;
        case 2:
            limite.innerHTML = "";
            IF_3.style.display = "flex";
            break;
        case 3:
            limite.innerHTML = "";
            IF_4.style.display = "flex";
            break;
        case 4:
            limite.innerHTML = "";
            IF_5.style.display = "flex";
            break;
        default:
            limite.innerHTML = "El limite son 4 archivos multimedia, si quiere agregar uno diferente tendra que eliminar una de las que ya eligio.";
    }
})

/****input 2******/
IF_2.addEventListener("click", function () {
    f2.click();
})
function f22(datos){
    array2[0] = 1;
    array1[0] = 0;
    visualizar3(datos, IF_2, ct_2, im2, vd2);
}
f2.addEventListener("change", function () {
    var files = this.files;

    array2[0] = 1;
    array1[0] = 0;
    visualizar(files[0], IF_2, ct_2, im2, vd2);
})
c_2.addEventListener("click", function () {
    IF_2.style.display = "none";
    ct_2.style.display = "none";
    array2[0] = 0;
    array1[0] = 1;
    limite.innerHTML = "";
    multi[0].value=""
})

/****input 3******/
IF_3.addEventListener("click", function () {
    f3.click();
})
function f33(datos){
    array2[1] = 2;
    array1[1] = 0;
    visualizar3(datos, IF_3, ct_3, im3, vd3);
}
f3.addEventListener("change", function () {
    var files = this.files;
    array2[1] = 2;
    array1[1] = 0;
    visualizar(files[0], IF_3, ct_3, im3, vd3);
})
c_3.addEventListener("click", function () {
    IF_3.style.display = "none";
    ct_3.style.display = "none";
    array2[1] = 0;
    array1[1] = 2;
    limite.innerHTML = "";
    multi[1].value="";
})

/****input 4******/
IF_4.addEventListener("click", function () {
    f4.click();
})
function f44(datos){
    array2[2] = 3;
    array1[2] = 0;
    visualizar3(datos, IF_4, ct_4, im4, vd4);
}
f4.addEventListener("change", function () {
    var files = this.files;
    array2[2] = 3;
    array1[2] = 0;
    visualizar(files[0], IF_4, ct_4, im4, vd4);
})
c_4.addEventListener("click", function () {
    IF_4.style.display = "none";
    ct_4.style.display = "none";
    array2[2] = 0;
    array1[2] = 3;
    limite.innerHTML = "";
    multi[2].value="";
})

/****input 5******/
IF_5.addEventListener("click", function () {
    f5.click();
})
function f55(datos){
    array2[0] = 1;
    array1[0] = 0;
    visualizar3(datos, IF_5, ct_5, im5, vd5);
}
f5.addEventListener("change", function () {
    var files = this.files;
    array2[3] = 4;
    array1[3] = 0;
    visualizar(files[0], IF_5, ct_5, im5, vd5);
})
c_5.addEventListener("click", function () {
    IF_5.style.display = "none";
    ct_5.style.display = "none";
    array2[3] = 0;
    array1[3] = 4;
    limite.innerHTML = "";
    multi[4].value="";

})


/*******funciones*******/
function visualizar(file, input, foto, imagen, video) {
    var imgCodified = URL.createObjectURL(file);

    if (file.type === "video/mp4") {
        video.style.display = "flex";
        video.src = imgCodified;
        foto.style.display = "flex";
        input.style.display = "none";
        imagen.style.display = "none";
    } else {
        imagen.style.display = "flex";
        imagen.src = imgCodified;
        foto.style.display = "flex";
        input.style.display = "none";
        video.style.display = "none";
    }
}
function visualizar2(file, imagen2) {
    var imgCodified = URL.createObjectURL(file);
    separador.style.display = "none";
    requerido.style.display = "none";
    IF_1.style.display = "none";
    foto.style.display = "flex";
    principal.src = imgCodified;

}
function url_tipo(url) {
    let div = url.split("?");
    let div2 = div[0].split(".");
    let tipo = div2[div2.length - 1];
    return tipo;
}
function visualizar3(datos, input, foto, imagen, video) {
    let tipo=url_tipo(datos)
    if (tipo === "mp4") {
        video.style.display = "flex";
        video.src = datos;
        foto.style.display = "flex";
        input.style.display = "none";
        imagen.style.display = "none";
    } else {
        imagen.style.display = "flex";
        imagen.src = datos;
        foto.style.display = "flex";
        input.style.display = "none";
        video.style.display = "none";
    }
}
foto.addEventListener("click", function () {
    foto.style.display = "none";
    separador.style.display = "flex";
    requerido.style.display = "flex";
    IF_1.style.display = "flex";
    principal.src = "./usuarios/menu/icons/camera.png";
    f1.required=true
    principal.value=""

})
subir.addEventListener("click", function () {
    console.log(anos.value);
    edad_es.value = anos.value;
    if (valor === 0) {
        modalf.style.display = "flex";
        requerido.style.color = "red";
        requerido.innerHTML = "Debe elegir una imagen de portada";
        IF_1.style.border = "5px dashed red";
    }
    if(ubication.value!== ubicationr.value && ubication.value!==""){
        ubicationr.value=ubication.value
        console.log(ubicationr.value);
    }
    if(categoria.value!== categoriar.value && categoria.value!==""){
        categoriar.value=categoria.value
        if(categoria.value === "Vaca" || categoria.value === "Novilla"){
            if(prenada.value!== prenadar.value && prenada.value!==""){
                prenadar.value=prenada.value
                if(prenada.value === "Esta preñada"){
                    if(tipoprenada.value!== tipoprenadar.value && tipoprenada.value!==""){
                        tipoprenadar.value=tipoprenada.value
                    }
                    if(toro.value!== toror.value && toro.value!==""){
                        toror.value=toro.value
                    }
                    if(semanas.value!== mesesr.value && semanas.value!==""){
                        mesesr.value=semanas.value
                    }
                    if(nprenada.value!== nprenadasr.value && nprenada.value!==""){
                        nprenadasr.value=nprenada.value
                    }
                }
            }
        }else{
            prenadar.value="";
            tipoprenadar.value=""
            toro.value=""
            mesesr.value=""
            nprenadasr.value=""
        }
    }
    if(edad.value!== edadr.value && edad.value!==""){
        edadr.value=edad.value
    }
    if(raza.value!== razar.value && raza.value!==""){
        razar.value=raza.value
    }
    if(producto.value!== productor.value && producto.value!==""){
        productor.value=producto.value
    }
    if(precio.value!== precior.value && precio.value!==""){
        precior.value=precio.value
    }
    if(descripcion.value!== descripcionr.value){
        descripcionr.value=descripcion.value
    }
})