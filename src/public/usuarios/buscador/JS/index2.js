let submit = document.querySelectorAll(".submit")[0];
let subir = document.querySelectorAll(".subir")[0];
let filtrado = document.querySelectorAll(".filtrado")[0];
let volver = document.querySelectorAll(".volver")[0];
let usuario = document.getElementById("usuarios");
let usuario1 = document.getElementById("usuarios1");
let vehiculo = document.getElementById("vehiculo")
let municipio = document.getElementById("ubication");
let precio = document.getElementById("precios");

let datos = [];
let palabras = 0;
let valor=0;

subir.addEventListener("click", function () {
    submit.click();
})
volver.addEventListener("click", function () {
    window.location="/acarreos";
})
vehiculo.addEventListener("click", function () {
    let encontrar = datos.includes(vehiculo.value);
    if (palabras !==6) {
        if (encontrar === false && vehiculo.value !== "") {
            datos.push(vehiculo.value)
            palabras = palabras + 1;
            valor=valor+1;
            var texto= $('<div class="busqueda "><p id="texto'+ valor+'" class="texto">' + vehiculo.value + '</p><div class="cerrar'+ valor+' cerrar"></div> </div>');
            $(texto).insertBefore("#ruta");
            var inpu=$('<input type="text" name="imput'+valor+'" id="imput'+valor+'" value="'+vehiculo.value+'">')
            $(inpu).insertBefore(".submit");
            vehiculo.value="";
        }
    } else {
        municipio.disabled=true;
        vehiculo.disabled=true;
        precio.disabled=true;
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
        vehiculo.disabled=true;
        precio.disabled=true;
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
        vehiculo.disabled=true;
        precio.disabled=true;
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
        vehiculo.disabled=false;
        precio.disabled=false;
        filtrado.innerHTML="";
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
        vehiculo.disabled=false;
        precio.disabled=false;
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
        vehiculo.disabled=false;
        precio.disabled=false;
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
        vehiculo.disabled=false;
        precio.disabled=false;
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
        vehiculo.disabled=false;
        precio.disabled=false;
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
        vehiculo.disabled=false;
        precio.disabled=false;
        filtrado.innerHTML="";
    }
    $(this).parent().remove();
});
