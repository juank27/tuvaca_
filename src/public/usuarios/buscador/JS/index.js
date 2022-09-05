let submit = document.querySelectorAll(".submit")[0];
let subir = document.querySelectorAll(".subir")[0];
let filtrado = document.querySelectorAll(".filtrado")[0];
let volver = document.querySelectorAll(".volver")[0];
let usuario = document.getElementById("usuarios");
let usuarios = document.getElementById("usuario");
let usuario1 = document.getElementById("usuarios1");
let raza = document.getElementById("razas");
let categoria = document.getElementById("categorias");
let edad = document.getElementById("edad_");
let municipio = document.getElementById("ubication");
let precio = document.getElementById("precios");
// let foto_perfil = document.getElementById("foto_perfil");
// function cargar(){
//     per.style.backgroundImage=(`url(${foto_perfil.value})`);
//     pub.style.backgroundImage=" url(./usuarios/menu/icons/Cow.png)";
// }
let datos = [];
let palabras = 0;
let valor = 0;

subir.addEventListener("click", function () {
    usuarios.value=usuario.value;
    submit.click();
})
// volver.addEventListener("click", function () {
//     window.location = "/publicaciones";
// })
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
    } else {
        usuario1.style.display = "flex";
        usuario.style.display = "none";
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
    } else {
        usuario.style.display = "none";
        usuario1.style.display = "flex";
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
    } else {
        usuario.style.display = "none";
        usuario1.style.display = "flex";
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
    } else {
        usuario.style.display = "none";
        usuario1.style.display = "flex";
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
    } else {
        usuario.style.display = "none";
        usuario1.style.display = "flex";
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
    }
    filtrado.innerHTML = "";
    let imput = document.getElementById("imput5");
    comparado(imput)
    $(imput).remove();
    $(this).parent().remove();
});

