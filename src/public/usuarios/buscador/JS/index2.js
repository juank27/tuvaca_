let submit = document.querySelectorAll(".submit")[0];
let subir = document.querySelectorAll(".subir")[0];
let subir2 = document.querySelectorAll(".subir2")[0];

let filtrado = document.querySelectorAll(".filtrado")[0];
let volver = document.querySelectorAll(".volver")[0];
let usuario = document.getElementById("usuarios");
let usuarios = document.getElementById("usuario");
let usuario1 = document.getElementById("usuarios1");
let vehiculo = document.getElementById("vehiculo")
let municipio = document.getElementById("ubication");
let precio = document.getElementById("precios");
let foto_perfil = document.getElementById("foto_perfil");
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    pub.style.backgroundImage=" url(./usuarios/menu/icons/Cow.png)";
}
let datos = [];
let palabras = 0;
let valor = 0;
let pre=document.getElementById('e');;
let mu=document.getElementById('d');;
let veh=document.getElementById('a');;
subir.addEventListener("click", function () {
    usuarios.value=usuario.value;
    submit.click();
})
subir2.addEventListener("click", function () {
    form.submit();
})
volver.addEventListener("click", function () {
    window.location = "/acarreos";
})
vehiculo.addEventListener("click", function () {
    let encontrar = datos.includes(vehiculo.value);

    if (encontrar === false && vehiculo.value !== "") {
        datos.push(vehiculo.value)
        palabras = palabras + 1;
        valor = valor + 1;
        var texto = $('<div class="busqueda "><p id="texto' + valor + '" class="texto">' + vehiculo.value + '</p><div class="cerrar' + valor + ' cerrar"></div> </div>');
        $(texto).insertBefore("#ruta");
        var inpu = $('<input type="text" name="vehiculo" id="imput' + valor + '" value="' + vehiculo.value + '">')
        $(inpu).insertBefore(".submit");
        veh.value=vehiculo.value;
        vehiculo.value = "";
        vehiculo.disabled = true;
    }
    if (palabras === 2) {
        filtrado.innerHTML = "Solo podemos filtrar 2 categorias, elimine una si quiere agregar otra diferente";
    }
    if (palabras == 0) {
        usuario.style.display = "flex";
        usuario1.style.display = "none";
        subir.style.display = "flex";
        subir2.style.display = "none";
    } else {
        usuario1.style.display = "flex";
        usuario.style.display = "none";
        subir2.style.display = "flex";
        subir.style.display = "none";
    }
})

municipio.addEventListener("click", function () {
    let encontrar = datos.includes(municipio.value);

    if (encontrar === false && municipio.value !== "") {
        datos.push(municipio.value)
        palabras = palabras + 1;
        valor = valor + 1;
        var texto = $('<div class="busqueda "><p id="texto' + valor + '" class="texto">' + municipio.value + '</p><div class="cerrar' + valor + ' cerrar"></div> </div>');
        $(texto).insertBefore("#ruta");
        var inpu = $('<input type="text" name="municipio" id="imput' + valor + '" value="' + municipio.value + '">')
        $(inpu).insertBefore(".submit");
        mu.value=municipio.value;
        municipio.value = "";
        municipio.disabled = true;
    }
    if (palabras === 2) {
        filtrado.innerHTML = "Solo podemos filtrar 2 categorias, elimine una si quiere agregar otra diferente";
    }
    if (palabras === 0) {
        usuario.style.display = "flex";
        usuario1.style.display = "none";
        subir.style.display = "flex";
        subir2.style.display = "none";
    } else {
        usuario.style.display = "none";
        usuario1.style.display = "flex";
        subir2.style.display = "flex";
        subir.style.display = "none";
    }
})


function comparado(texto) {
    if (texto.name === "vehiculo") {
        vehiculo.disabled = false;
    }
    else if (texto.name === "municipio") {
        municipio.disabled = false;
    } else {
        precio.disabled = false;
    }
}
$(document).on("click", " .cerrar1", function (e) {
    let texto = document.getElementById("imput1").value;
    datos = datos.filter((item) => item !== texto);
    palabras = palabras - 1;
    valor = valor - 1;
    if (palabras === 0) {
        usuario.style.display = "flex";
        usuario1.style.display = "none";
        subir.style.display = "flex";
        subir2.style.display = "none";
    }
    filtrado.innerHTML = "";
    let imput = document.getElementById("imput1");
    comparado(imput)
    $(imput).remove();
    $(this).parent().remove();
});
$(document).on("click", " .cerrar2", function (e) {
    let texto = document.getElementById("imput2").value;
    datos = datos.filter((item) => item !== texto);
    palabras = palabras - 1;
    valor = valor - 1;
    if (palabras === 0) {
        usuario.style.display = "flex";
        usuario1.style.display = "none";
        subir.style.display = "flex";
        subir2.style.display = "none";
    }
    filtrado.innerHTML = "";
    let imput = document.getElementById("imput2");
    comparado(imput)
    $(imput).remove();
    $(this).parent().remove();
});
$(document).on("click", " .cerrar3", function (e) {
    let texto = document.getElementById("imput3").value;
    datos = datos.filter((item) => item !== texto);
    palabras = palabras - 1;
    valor = valor - 1;
    if (palabras === 0) {
        usuario.style.display = "flex";
        usuario1.style.display = "none";
        subir.style.display = "flex";
        subir2.style.display = "none";
    }
    filtrado.innerHTML = "";
    let imput = document.getElementById("imput3");
    comparado(imput)
    $(imput).remove();
    $(this).parent().remove();
});
/****acarreos ***/
let id3 = document.getElementById("id3");


let perfils = document.querySelectorAll(".perfilS")[0];
function posicion2(valor) {
    id = document.querySelectorAll(".id")[valor].value;
    id3.value = id;
    perfils.submit();
}
function posicion3(valor) {
    id = document.querySelectorAll(".id")[valor].value;
    id3.value = id;
    perfils.submit();
}
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    car.style.backgroundImage=" url(./usuarios/menu/icons/Truck2.png)";
}
function posicion4(valor) {
    let _name = document.querySelectorAll(".nombre")[valor].value;
    let phone = document.querySelectorAll(".phone")[valor].value;
    let categoria = document.querySelectorAll(".categoria")[valor].value;
    let yo = document.getElementById("yo");

    let url = "https://api.whatsapp.com/send?phone=57" + phone + "&text=Hola%20" + _name + ",%20yo%20soy%20" + yo.innerHTML + "%20y%20quisiera%20saber%20la%20tarifa%20para%20un%20acarreo%20con%20el%20vehiculo%20tipo%20" + categoria +",%20muchas%20gracias.";
    window.open(url);
}