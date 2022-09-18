let submit = document.querySelectorAll(".submit")[0];
let subir = document.querySelectorAll(".subir")[0];
let subir2 = document.querySelectorAll(".subir2")[0];
let filtrado = document.querySelectorAll(".filtrado")[0];
let volver = document.querySelectorAll(".volver")[0];
let usuario = document.getElementById("usuarios");
let form = document.getElementById("form");
let usuarios = document.getElementById("usuario");
let usuario1 = document.getElementById("usuarios1");
let raza = document.getElementById("razas");
let categoria = document.getElementById("categorias");
let edad = document.getElementById("edad_");
let municipio = document.getElementById("ubication");
let precio = document.getElementById("precios");
let foto_perfil = document.getElementById("foto_perfil");
function cargar() {
    per.style.backgroundImage = (`url(${foto_perfil.value})`);
    pub.style.backgroundImage = " url(./usuarios/menu/icons/Cow.png)";
}
let datos = [];
let palabras = 0;
let valor = 0;
let cat=document.getElementById('b');
let pre=document.getElementById('e');
let ra=document.getElementById('a');
let mu=document.getElementById('d');
let ed=document.getElementById('c');
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach(node => node.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});
subir.addEventListener("click", function () {
    usuarios.value = usuario.value;
    submit.click();
})
subir2.addEventListener("click", function () {

    form.submit();
})
volver.addEventListener("click", function () {
    window.location = "/publicaciones";
})
categoria.addEventListener("click", function () {
    let encontrar = datos.includes(categoria.value);
    if (encontrar === false && categoria.value !== "") {
        datos.push(categoria.value)
        palabras = palabras + 1;
        valor = valor + 1;
        var texto = $('<div class="busqueda "><p id="texto' + valor + ' " class="texto">' + categoria.value + '</p><div class="cerrar' + valor + ' cerrar"></div> </div>');
        $(texto).insertBefore("#ruta");
        var inpu = $('<input type="text" name="categoria" id="imput' + valor + '" value="' + categoria.value + '">')
        $(inpu).insertBefore(".submit");
        cat.value=categoria.value
        categoria.value = "";
        categoria.disabled = true;
    }
    if (palabras === 5) {
        console.log("entre");
        filtrado.innerHTML = "Solo podemos filtrar 5 categorias, elimine una si quiere agregar otra diferente";
    }
    console.log(palabras);
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
raza.addEventListener("click", function () {
    let encontrar = datos.includes(raza.value);

    if (encontrar === false && raza.value !== "") {
        datos.push(raza.value)
        palabras = palabras + 1;
        valor = valor + 1;
        var texto = $('<div class="busqueda "><p id="texto' + valor + '" class="texto">' + raza.value + '</p><div class="cerrar' + valor + ' cerrar"></div> </div>');
        $(texto).insertBefore("#ruta");
        var inpu = $('<input type="text" name="raza" id="imput' + valor + '" value="' + raza.value + '">')
        $(inpu).insertBefore(".submit");
        ra.value=raza.value
        raza.value = "";
        raza.disabled = true;
    }
    if (palabras === 5) {
        console.log("entre");
        filtrado.innerHTML = "Solo podemos filtrar 5 categorias, elimine una si quiere agregar otra diferente";
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
        mu.value=municipio.value
        municipio.value = "";
        municipio.disabled = true;
    }
    if (palabras === 5) {
        console.log("entre");
        filtrado.innerHTML = "Solo podemos filtrar 5 categorias, elimine una si quiere agregar otra diferente";
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
edad.addEventListener("click", function () {
    let encontrar = datos.includes(edad.value);

    if (encontrar === false && edad.value !== "") {
        datos.push(edad.value)
        palabras = palabras + 1;
        valor = valor + 1;
        var texto = $('<div class="busqueda "><p id="texto' + valor + ' " class="texto">' + edad.value + '</p><div class="cerrar' + valor + ' cerrar"></div> </div>');
        $(texto).insertBefore("#ruta");
        var inpu = $('<input type="text" name="edad" id="imput' + valor + '" value="' + edad.value + '">')
        $(inpu).insertBefore(".submit");
        ed.value=edad.value
        edad.value = "";
        edad.disabled = true;
    }
    if (palabras === 5) {
        console.log("entre");
        filtrado.innerHTML = "Solo podemos filtrar 5 categorias, elimine una si quiere agregar otra diferente";
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
precio.addEventListener("click", function () {
    let encontrar = datos.includes(precio.value);

    if (encontrar === false && precio.value !== "") {
        datos.push(precio.value)
        palabras = palabras + 1;
        valor = valor + 1;
        var texto = $('<div class="busqueda "><p id="texto' + valor + '" class="texto">' + precio.value + '</p><div class="cerrar' + valor + ' cerrar"></div> </div>');
        $(texto).insertBefore("#ruta");
        var inpu = $('<input type="number" name="precio" id="imput' + valor + '" value="' + precio.value + '">')
        $(inpu).insertBefore(".submit");
        pre.value=precio.value
        precio.value = "";
        precio.disabled = true;
    }
    if (palabras === 5) {
        console.log("entre");
        filtrado.innerHTML = "Solo podemos filtrar 5 categorias, elimine una si quiere agregar otra diferente";
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
    if (texto.name === "categoria") {
        console.log("entre");
        categoria.disabled = false;
    } else if (texto.name === "raza") {
        raza.disabled = false;
    }
    else if (texto.name === "edad") {
        edad.disabled = false;
    }
    else if (texto.name === "municipio") {
        municipio.disabled = false;
    } else {
        precio.disabled = false;
    }
}
$(document).on("click", " .cerrar1", function (e) {
    let imput = document.getElementById("imput1");
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
$(document).on("click", " .cerrar4", function (e) {
    let texto = document.getElementById("imput4").value;
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
    let imput = document.getElementById("imput4");
    comparado(imput)
    $(imput).remove();
    $(this).parent().remove();
});
$(document).on("click", " .cerrar5", function (e) {
    let texto = document.getElementById("imput5").value;
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
    let imput = document.getElementById("imput5");
    comparado(imput)
    $(imput).remove();
    $(this).parent().remove();
});

/****publicaciones */


let abrirSesion;
let id;
let cerrarSesion = document.querySelectorAll(".cerrar_modal_p")[0];
let buscando = document.querySelectorAll(".buscando")[0];
let modalSesion = document.querySelectorAll(".modal_container_p")[0];
let modalSesion2 = document.querySelectorAll(".modal_p")[0];
let publicación = document.getElementById("publicacion");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let framer = document.getElementById("framer");

function posicion(valor) {
    framer.contentDocument.location.reload(true);
    id = document.querySelectorAll(".id")[valor].value;
    id2.value = id;
    publicación.submit();
    setTimeout(function () {
        modal()
    }, 1000);
}
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

function modal() {
    framer.src += ''
    modalSesion.style.opacity = "1";
    modalSesion.style.visibility = "visible";
    modalSesion2.classList.toggle("modal_cerrado_p");
}
cerrarSesion.addEventListener("click", function () {
    modalSesion2.classList.toggle("modal_cerrado_p");
    setTimeout(function () {
        modalSesion.style.opacity = "0";
        modalSesion.style.visibility = "hidden";
        id.value = "";
    }, 500)
})

/***recuperando datos para el chat *****/

function posicion4(valor) {
    console.log("dentro");
    let _name = document.querySelectorAll(".nombre")[valor].value;
    let phone = document.querySelectorAll(".phone")[valor].value;
    let updateAt = document.querySelectorAll(".updateAt")[valor].value;
    let raza = document.querySelectorAll(".raza")[valor].value;
    let categoria = document.querySelectorAll(".categoria")[valor].value;
    let precio = document.querySelectorAll(".precio")[valor].value;
    let yo = document.getElementById("yo");

    let url = "https://api.whatsapp.com/send?phone=57" + phone + "&text=Hola%20" + _name + ",%20yo%20soy%20" + yo.innerHTML + "%20y%20estoy%20interesado%20en%20la%20publicación%20que%20realizo%20el%20" + updateAt + ",%20el%20cual%20es%20" + categoria + "%20de%20raza%20" + raza + "%20con%20precio%20" + precio + ",%20me%20gustaría%20tener%20más%20información,%20muchas%20gracias.";
    window.open(url);
}