let submit = document.querySelectorAll(".submit")[0];
let subir = document.querySelectorAll(".subir")[0];
let filtrado = document.querySelectorAll(".filtrado")[0];
let volver = document.querySelectorAll(".volver")[0];
let usuario = document.getElementById("usuarios");
let usuario1 = document.getElementById("usuarios1");
let raza = document.getElementById("razas");
let categoria = document.getElementById("categorias");
let edad = document.getElementById("edad_");
let municipio = document.getElementById("ubication");
let precio = document.getElementById("precios");

let datos = [];
let palabras = 0;
let valor=0;

subir.addEventListener("click", function () {
    submit.click();
})
volver.addEventListener("click", function () {
    window.location="/publicaciones";
})
categoria.addEventListener("click", function () {
    let encontrar = datos.includes(categoria.value);
    if (palabras !== 6) {
        if (encontrar === false && categoria.value !== "") {
            datos.push(categoria.value)
            palabras = palabras + 1;
            valor=valor+1;
            var texto= $('<div class="busqueda "><p id="texto'+ valor+' " class="texto">' + categoria.value + '</p><div class="cerrar'+ valor+' cerrar"></div> </div>');
            $(texto).insertBefore("#ruta");
            var inpu=$('<input type="text" name="imput'+valor+'" id="imput'+valor+'" value="'+categoria.value+'">')
            $(inpu).insertBefore(".submit");
            categoria.value="";
        }
    } else {
        municipio.disabled=true;
        raza.disabled=true;
        precio.disabled=true;
        edad.disabled=true;
        categoria.disabled=true;
        filtrado.innerHTML="Solo podemos filtrar 6 categorias, elimine una si quiere agregar otra diferente";
    }
    console.log(palabras);
    if(palabras==0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }else{
        usuario1.style.display="flex";
        usuario.style.display="none";
    }
})
raza.addEventListener("click", function () {
    let encontrar = datos.includes(raza.value);
    if (palabras !== 6) {
        if (encontrar === false && raza.value !== "") {
            datos.push(raza.value)
            palabras = palabras + 1;
            valor=valor+1;
            var texto= $('<div class="busqueda "><p id="texto'+ valor+'" class="texto">' + raza.value + '</p><div class="cerrar'+ valor+' cerrar"></div> </div>');
            $(texto).insertBefore("#ruta");
            var inpu=$('<input type="text" name="imput'+valor+'" id="imput'+valor+'" value="'+raza.value+'">')
            $(inpu).insertBefore(".submit");
            raza.value="";
        }
    } else {
        municipio.disabled=true;
        raza.disabled=true;
        precio.disabled=true;
        edad.disabled=true;
        categoria.disabled=true;
        filtrado.innerHTML="Solo podemos filtrar 6 categorias, elimine una si quiere agregar otra diferente";
    }
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }else{
        usuario.style.display="none";
        usuario1.style.display="flex";
    }
})
municipio.addEventListener("click", function () {
    let encontrar = datos.includes(municipio.value);
    if (palabras !== 6) {
        if (encontrar === false && municipio.value !== "") {
            datos.push(municipio.value)
            palabras = palabras + 1;
            valor=valor+1;
            var texto= $('<div class="busqueda "><p id="texto'+ valor+'" class="texto">' + municipio.value + '</p><div class="cerrar'+ valor+' cerrar"></div> </div>');
            $(texto).insertBefore("#ruta");
            var inpu=$('<input type="text" name="imput'+valor+'" id="imput'+valor+'" value="'+municipio.value+'">')
            $(inpu).insertBefore(".submit");
            municipio.value="";
        }
    } else {
        municipio.disabled=true;
        raza.disabled=true;
        precio.disabled=true;
        edad.disabled=true;
        categoria.disabled=true;
        filtrado.innerHTML="Solo podemos filtrar 6 categorias, elimine una si quiere agregar otra diferente";
    }
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }else{
        usuario.style.display="none";
        usuario1.style.display="flex";
    }
})
edad.addEventListener("click", function () {
    let encontrar = datos.includes(edad.value);
    if (palabras !== 6) {
        if (encontrar === false && edad.value !== "") {
            datos.push(edad.value)
            palabras = palabras + 1;
            valor=valor+1;
            var texto= $('<div class="busqueda "><p id="texto'+ valor+' " class="texto">' + edad.value + '</p><div class="cerrar'+ valor+' cerrar"></div> </div>');
            $(texto).insertBefore("#ruta");
            var inpu=$('<input type="text" name="imput'+valor+'" id="imput'+valor+'" value="'+edad.value+'">')
            $(inpu).insertBefore(".submit");
            edad.value="";
        }
    } else {
        municipio.disabled=true;
        raza.disabled=true;
        precio.disabled=true;
        edad.disabled=true;
        categoria.disabled=true;
        filtrado.innerHTML="Solo podemos filtrar 6 categorias, elimine una si quiere agregar otra diferente";
    }
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }else{
        usuario.style.display="none";
        usuario1.style.display="flex";
    }
})
precio.addEventListener("click", function () {
    let encontrar = datos.includes(precio.value);
    if (palabras !== 6) {
        if (encontrar === false && precio.value !== "") {
            datos.push(precio.value)
            palabras = palabras + 1;
            valor=valor+1;
            var texto= $('<div class="busqueda "><p id="texto'+ valor+'" class="texto">' + precio.value + '</p><div class="cerrar'+ valor+' cerrar"></div> </div>');
            $(texto).insertBefore("#ruta");
            var inpu=$('<input type="number" name="imput'+valor+'" id="imput'+valor+'" value="'+precio.value+'">')
            $(inpu).insertBefore(".submit");
            precio.value="";
        }
    } else {
        municipio.disabled=true;
        raza.disabled=true;
        precio.disabled=true;
        edad.disabled=true;
        categoria.disabled=true;
        filtrado.innerHTML="Solo podemos filtrar 6 categorias, elimine una si quiere agregar otra diferente";
    }
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }else{
        usuario.style.display="none";
        usuario1.style.display="flex";
    }
})
$(document).on("click", " .cerrar1", function(e){
    let texto = document.getElementById("imput1").value;
    datos=datos.filter((item)=>item!==texto);
    palabras=palabras-1;
    valor=valor-1;
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }
    if(palabras!==4){
        municipio.disabled=false;
        raza.disabled=false;
        precio.disabled=false;
        edad.disabled=false;
        categoria.disabled=false;
    }
    $(this).parent().remove();
});
$(document).on("click", " .cerrar2", function(e){
    let texto = document.getElementById("imput2").value;
    datos=datos.filter((item)=>item!==texto);
    palabras=palabras-1;
    valor=valor-1;
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }
    if(palabras!==4){
        municipio.disabled=false;
        raza.disabled=false;
        precio.disabled=false;
        edad.disabled=false;
        categoria.disabled=false;
        filtrado.innerHTML="";
    }
    $(this).parent().remove();
});
$(document).on("click", " .cerrar3", function(e){
    let texto = document.getElementById("imput3").value;
    datos=datos.filter((item)=>item!==texto);
    palabras=palabras-1;
    valor=valor-1;
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }
    if(palabras!==4){
        municipio.disabled=false;
        raza.disabled=false;
        precio.disabled=false;
        edad.disabled=false;
        categoria.disabled=false;
        filtrado.innerHTML="";
    }
    $(this).parent().remove();
});
$(document).on("click", " .cerrar4", function(e){
    let texto = document.getElementById("imput4").value;
    datos=datos.filter((item)=>item!==texto);
    palabras=palabras-1;
    valor=valor-1;
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }
    if(palabras!==4){
        municipio.disabled=false;
        raza.disabled=false;
        precio.disabled=false;
        edad.disabled=false;
        categoria.disabled=false;
        filtrado.innerHTML="";
    }
    $(this).parent().remove();
});
$(document).on("click", " .cerrar5", function(e){
    let texto = document.getElementById("imput5").value;
    datos=datos.filter((item)=>item!==texto);
    palabras=palabras-1;
    valor=valor-1;
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }
    if(palabras!==4){
        municipio.disabled=false;
        raza.disabled=false;
        precio.disabled=false;
        edad.disabled=false;
        categoria.disabled=false;
        filtrado.innerHTML="";
    }
    $(this).parent().remove();
});
$(document).on("click", " .cerrar6", function(e){
    let texto = document.getElementById("imput6").value;
    datos=datos.filter((item)=>item!==texto);
    palabras=palabras-1;
    valor=valor-1;
    if(palabras===0){
        usuario.style.display="flex";
        usuario1.style.display="none";
    }
    if(palabras!==4){
        municipio.disabled=false;
        raza.disabled=false;
        precio.disabled=false;
        edad.disabled=false;
        categoria.disabled=false;
        filtrado.innerHTML="";
    }
    $(this).parent().remove();
});
