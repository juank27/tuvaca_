/*****************************menu*******************************/
let home = document.getElementById('homes');
let cow = document.getElementById('cow');
let mail = document.getElementById('mail');
let body = document.getElementById('body');

home.addEventListener('click', function () {
    home.style.backgroundImage = 'url("./principal/icons/casa2.png")';
    home.style.transition = "0.2s"
    mail.style.backgroundImage = 'url("./principal/icons/mail.png")';
    mail.style.transition = "0.2s";
    cow.style.backgroundImage = 'url("./principal/icons/Cow-1.png")';
    cow.style.transition = "0.2s";
})
cow.addEventListener('click', function () {
    home.style.backgroundImage = 'url("./principal/icons/casa.png")';
    home.style.transition = "0.2s";
    mail.style.backgroundImage = 'url("./principal/icons/mail.png")';
    mail.style.transition = "0.2s";
    cow.style.backgroundImage = 'url("./principal/icons/Cow.png")';
    cow.style.transition = "0.2s";
})
mail.addEventListener('click', function () {
    home.style.backgroundImage = 'url("./principal/icons/casa.png")';
    home.style.transition = "0.2s"
    mail.style.backgroundImage = 'url("./principal/icons/mail2.png")';
    mail.style.transition = "0.2s";
    cow.style.backgroundImage = 'url("./principal/icons/Cow-1.png")';
    cow.style.transition = "0.2s";
})

/*****************************animación municipios*******************************/
window.onload = function () {
    function uno() {
        setTimeout(function () {
            document.getElementById("uno").style.visibility = "visible";
        }, 200
        )
        setTimeout(function () {
            document.getElementById("unoseis").style.visibility = "visible";
            document.getElementById("cinco").style.visibility = "visible";
        }, 400
        )
        setTimeout(function () {
            document.getElementById("nueve").style.visibility = "visible";
            document.getElementById("diez").style.visibility = "visible";
            document.getElementById("quince").style.visibility = "visible";
        }, 800
        )
        setTimeout(function () {
            document.getElementById("seis").style.visibility = "visible";
            document.getElementById("doce").style.visibility = "visible";
            document.getElementById("dos").style.visibility = "visible";
            document.getElementById("tres").style.visibility = "visible";
        }, 1200
        )
        setTimeout(function () {
            document.getElementById("ocho").style.visibility = "visible";
            document.getElementById("once").style.visibility = "visible";
            document.getElementById("cuatro").style.visibility = "visible";
            document.getElementById("catorce").style.visibility = "visible";
            document.getElementById("trece").style.visibility = "visible";
        }, 1400
        )
        setTimeout(function () {
            document.getElementById("uno").style.visibility = "hidden";
            document.getElementById("unoseis").style.visibility = "hidden";
            document.getElementById("cinco").style.visibility = "hidden";
            document.getElementById("nueve").style.visibility = "hidden";
            document.getElementById("diez").style.visibility = "hidden";
            document.getElementById("quince").style.visibility = "hidden";
            document.getElementById("seis").style.visibility = "hidden";
            document.getElementById("doce").style.visibility = "hidden";
            document.getElementById("dos").style.visibility = "hidden";
            document.getElementById("tres").style.visibility = "hidden";
            document.getElementById("ocho").style.visibility = "hidden";
            document.getElementById("once").style.visibility = "hidden";
            document.getElementById("cuatro").style.visibility = "hidden";
            document.getElementById("catorce").style.visibility = "hidden";
            document.getElementById("trece").style.visibility = "hidden";
        }, 1600
        )
    }
    let intervalo = setInterval(uno, 1700);
}

/*****************************modal de inicio de sesion*******************************/
let abrirSesion = document.querySelectorAll(".modal_IS_abrir")[0];
let cerrarSesion = document.querySelectorAll(".cerrar_modal_IS")[0];
let modalSesion = document.querySelectorAll(".modal_container_IS")[0];
let modalSesion2 = document.querySelectorAll(".modal_IS")[0];

abrirSesion.addEventListener("click", function () {
    modalSesion.style.opacity = "1";
    modalSesion.style.visibility = "visible";
    modalSesion2.classList.toggle("modal_cerrado_IS")
})

cerrarSesion.addEventListener("click", function () {
    modalSesion2.classList.toggle("modal_cerrado_IS");
    setTimeout(function () {
        modalSesion.style.opacity = "0";
        modalSesion.style.visibility = "hidden";
    }, 900)
})

/*****************************modal de Registro*******************************/
let abrirRegistro = document.querySelectorAll(".modal_R_abrir")[0];
let cerrarRegistro = document.querySelectorAll(".cerrar_modal_R")[0];
let modalRegistro = document.querySelectorAll(".modal_container_R")[0];
let modalRegistro2 = document.querySelectorAll(".modal_R")[0];

abrirRegistro.addEventListener("click", function () {

    modalRegistro.style.opacity = "1";
    modalRegistro.style.visibility = "visible";
    modalRegistro2.classList.toggle("modal_cerrado_R")
})

cerrarRegistro.addEventListener("click", function () {
    modalRegistro2.classList.toggle("modal_cerrado_R");
    setTimeout(function () {
        modalRegistro.style.opacity = "0";
        modalRegistro.style.visibility = "hidden";
    }, 900)
})
/*****************************modal municipios*******************************/
let municipios = document.querySelectorAll(".municipios")[0];
let modalMunicipio = document.querySelectorAll(".modal_container_M")[0];
let cerrarMunicipio = document.querySelectorAll(".cerrar_modal_M")[0];
let modalMunicipio2 = document.querySelectorAll(".modal_M")[0];

municipios.addEventListener("click", function () {

    modalMunicipio.style.opacity = "1";
    modalMunicipio.style.visibility = "visible";
    modalMunicipio2.classList.toggle("modal_cerrado_M")
})
cerrarMunicipio.addEventListener("click", function () {
    modalMunicipio2.classList.toggle("modal_cerrado_M");
    setTimeout(function () {
        modalMunicipio.style.opacity = "0";
        modalMunicipio.style.visibility = "hidden";
    }, 900)
})

let carupa = document.querySelectorAll(".carupa")[0];
let cucunuba = document.querySelectorAll(".cucunuba")[0];
let fuquene = document.querySelectorAll(".fuquene")[0];
let guacheta = document.querySelectorAll(".guacheta")[0];
let lenguazaque = document.querySelectorAll(".lenguazaque")[0];
let simijaca = document.querySelectorAll(".simijaca")[0];
let susa = document.querySelectorAll(".susa")[0];
let suta = document.querySelectorAll(".suta")[0];
let tausa = document.querySelectorAll(".tausa")[0];
let ubate = document.querySelectorAll(".ubate")[0];
let ubicación = document.querySelectorAll(".ubicación")[0];
carupa.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "4/3/5/4";
    ubicación.style.alignSelf = "start";
})
cucunuba.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "5/5/6/6";
    ubicación.style.alignSelf = "start";
})
fuquene.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "3/5/4/6";
    ubicación.style.alignSelf = "end";
})
guacheta.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "4/6/5/7";
    ubicación.style.alignSelf = "start";
})
lenguazaque.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "4/6/5/7";
    ubicación.style.alignSelf = "end";
})
simijaca.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "3/4/4/5";
    ubicación.style.alignSelf = "start";
})
susa.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "4/4/5/5";
    ubicación.style.alignSelf = "start";
})
suta.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "5/4/6/5";
    ubicación.style.alignSelf = "start";

})
tausa.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "5/3/6/4";
    ubicación.style.alignSelf = "end";
})
ubate.addEventListener("click", function () {
    ubicación.style.visibility = "visible";
    ubicación.style.gridArea = "4/4/5/5";
    ubicación.style.alignSelf = "end";

})
/*****************************modal directorio*******************************/
let directorio = document.querySelectorAll(".directorio")[0];
let modaldirectorio = document.querySelectorAll(".modal_container_D")[0];
let cerrardirectorio = document.querySelectorAll(".cerrar_modal_D")[0];
let modaldirectorio2 = document.querySelectorAll(".modal_D")[0];
directorio.addEventListener("click", function () {

    modaldirectorio.style.opacity = "1";
    modaldirectorio.style.visibility = "visible";
    modaldirectorio2.classList.toggle("modal_cerrado_D")
})
cerrardirectorio.addEventListener("click", function () {
    modaldirectorio2.classList.toggle("modal_cerrado_D");
    setTimeout(function () {
        modaldirectorio.style.opacity = "0";
        modaldirectorio.style.visibility = "hidden";
    }, 900)
})
let filtro2 = document.querySelectorAll(".filtros2")[0];
let municipioD = document.querySelectorAll(".municipioD")[0];
let municipioDF = document.querySelectorAll(".municipiosDF")[0];
let vendedorD = document.querySelectorAll(".vendedorD")[0];
let vendedorDF = document.querySelectorAll(".vendedorDF")[0];
let precioD = document.querySelectorAll(".preciosD")[0];
let preciosD = document.querySelectorAll(".precioD")[0];
let vehiculo = document.querySelectorAll(".vehiculo")[0];
let vehiculoF = document.querySelectorAll(".vehiculoF")[0];
vehiculo.addEventListener("click", function () {
    vehiculoF.style.visibility = "visible";
    vehiculoF.style.height = "auto";
    municipioDF.style.visibility = "hidden";
    municipioDF.style.height = "0px";
    vendedorDF.style.visibility = "hidden";
    vendedorDF.style.height = "0px";
    filtro2.style.visibility = "visible"
    filtro2.style.height = "auto";
    precioD.style.visibility = "hidden"
    precioD.style.height = "0px"
    document.getElementById('categoria').innerHTML = 'Vehiculo';
})
municipioD.addEventListener("click", function () {
    vehiculoF.style.visibility = "hidden";
    vehiculoF.style.height = "0px";
    municipioDF.style.visibility = "visible";
    municipioDF.style.height = "auto";
    vendedorF.style.visibility = "hidden";
    vendedorDF.style.height = "0px";
    filtro2.style.visibility = "visible"
    filtro2.style.height = "auto";
    precioD.style.visibility = "hidden"
    precioD.style.height = "0px"
    document.getElementById('categoria').innerHTML = 'Municipios';
})
vendedorD.addEventListener("click", function () {
    vehiculoF.style.visibility = "hidden";
    vehiculoF.style.height = "0px";
    municipioDF.style.visibility = "hidden";
    municipioDF.style.height = "0px";
    vendedorDF.style.visibility = "visible";
    vendedorDF.style.height = "auto";
    filtro2.style.visibility = "visible"
    filtro2.style.height = "auto";
    precioD.style.visibility = "hidden"
    precioD.style.height = "0px"
    document.getElementById('categoria').innerHTML = 'Vendedor';
})
preciosD.addEventListener("click", function () {
    vehiculoF.style.visibility = "hidden";
    vehiculoF.style.height = "opx";
    municipioDF.style.visibility = "hidden";
    municipioDF.style.height = "0px";
    vendedorDF.style.visibility = "hidden";
    vendedorDF.style.height = "0px";
    filtro2.style.visibility = "hidden"
    filtro2.style.height = "0px";
    precioD.style.visibility = "visible"
    precioD.style.height = "auto"
    document.getElementById('categoria').innerHTML = 'Precio';
})
/*****************************modal busqueda*******************************/
let busquedas = document.querySelectorAll(".busquedas")[0];
let modalBusqueda = document.querySelectorAll(".modal_container_B")[0];
let cerrarBusqueda = document.querySelectorAll(".cerrar_modal_B")[0];
let modalBusqueda2 = document.querySelectorAll(".modal_B")[0];

busquedas.addEventListener("click", function () {

    modalBusqueda.style.opacity = "1";
    modalBusqueda.style.visibility = "visible";
    modalBusqueda2.classList.toggle("modal_cerrado_B")
})
cerrarBusqueda.addEventListener("click", function () {
    modalBusqueda2.classList.toggle("modal_cerrado_B");
    setTimeout(function () {
        modalBusqueda.style.opacity = "0";
        modalBusqueda.style.visibility = "hidden";
    }, 900)
})
let filtro = document.querySelectorAll(".filtros")[0];
let precios = document.querySelectorAll(".precios")[0];
let raza = document.querySelectorAll(".raza")[0];
let razaF = document.querySelectorAll(".razaF")[0];
let categoria = document.querySelectorAll(".categoria")[0];
let categoriaF = document.querySelectorAll(".categoriasF")[0];
let edad = document.querySelectorAll(".edad")[0];
let edadF = document.querySelectorAll(".edadF")[0];
let municipio = document.querySelectorAll(".municipioB")[0];
let municipioF = document.querySelectorAll(".municipiosF")[0];
let vendedor = document.querySelectorAll(".vendedor")[0];
let vendedorF = document.querySelectorAll(".vendedorF")[0];
let precio = document.querySelectorAll(".precio")[0];


raza.addEventListener("click", function () {
    razaF.style.visibility = "visible";
    razaF.style.height = "auto";
    categoriaF.style.visibility = "hidden";
    categoriaF.style.height = "0px";
    edadF.style.visibility = "hidden";
    edadF.style.height = "0px";
    municipioF.style.visibility = "hidden";
    municipioF.style.height = "0px";
    vendedorF.style.visibility = "hidden";
    vendedorF.style.height = "0px";
    filtro.style.visibility = "visible"
    filtro.style.height = "auto";
    precios.style.visibility = "hidden"
    precios.style.height = "0px"
    document.getElementById('categoria').innerHTML = 'Raza';
})
categoria.addEventListener("click", function () {
    razaF.style.visibility = "hidden";
    razaF.style.height = "0px";
    categoriaF.style.visibility = "visible";
    categoriaF.style.height = "auto";
    edadF.style.visibility = "hidden";
    edadF.style.height = "0px";
    municipioF.style.visibility = "hidden";
    municipioF.style.height = "0px";
    vendedorF.style.visibility = "hidden";
    vendedorF.style.height = "0px";
    filtro.style.visibility = "visible"
    filtro.style.height = "auto";
    precios.style.visibility = "hidden"
    precios.style.height = "0px"
    document.getElementById('categoria').innerHTML = 'Categoria';
})
edad.addEventListener("click", function () {
    razaF.style.visibility = "hidden";
    razaF.style.height = "0px";
    categoriaF.style.visibility = "hidden";
    categoriaF.style.height = "0px";
    edadF.style.visibility = "visible";
    edadF.style.height = "auto";
    municipioF.style.visibility = "hidden";
    municipioF.style.height = "0px";
    vendedorF.style.visibility = "hidden";
    vendedorF.style.height = "0px";
    filtro.style.visibility = "visible"
    filtro.style.height = "auto";
    precios.style.visibility = "hidden"
    precios.style.height = "0px"
    document.getElementById('categoria').innerHTML = 'Edad';
})
municipio.addEventListener("click", function () {
    razaF.style.visibility = "hidden";
    razaF.style.height = "0px";
    categoriaF.style.visibility = "hidden";
    categoriaF.style.height = "0px";
    edadF.style.visibility = "hidden";
    edadF.style.height = "0px";
    municipioF.style.visibility = "visible";
    municipioF.style.height = "auto";
    vendedorF.style.visibility = "hidden";
    vendedorF.style.height = "0px";
    filtro.style.visibility = "visible"
    filtro.style.height = "auto";
    precios.style.visibility = "hidden"
    precios.style.height = "0px"
    document.getElementById('categoria').innerHTML = 'Municipio';
})
vendedor.addEventListener("click", function () {
    razaF.style.visibility = "hidden";
    razaF.style.height = "0px";
    categoriaF.style.visibility = "hidden";
    categoriaF.style.height = "0px";
    edadF.style.visibility = "hidden";
    edadF.style.height = "0px";
    municipioF.style.visibility = "hidden";
    municipioF.style.height = "0px";
    vendedorF.style.visibility = "visible";
    vendedorF.style.height = "auto";
    filtro.style.visibility = "visible"
    filtro.style.height = "auto";
    precios.style.visibility = "hidden"
    precios.style.height = "0px";
    document.getElementById('categoria').innerHTML = 'Vendedor';
})
precio.addEventListener("click", function () {
    razaF.style.visibility = "hidden";
    razaF.style.height = "0px";
    categoriaF.style.visibility = "hidden";
    categoriaF.style.height = "0px";
    edadF.style.visibility = "hidden";
    edadF.style.height = "0px";
    municipioF.style.visibility = "hidden";
    municipioF.style.height = "0px";
    vendedorF.style.visibility = "hidden";
    vendedorF.style.height = "0px";
    filtro.style.visibility = "hidden"
    filtro.style.height = "0px";
    precios.style.visibility = "visible"
    precios.style.height = "auto";
})
/*****************************modal publicaciones*******************************/
let publicaciones = document.querySelectorAll(".publicaciones")[0];
let modalPublicacion = document.querySelectorAll(".modal_container_P")[0];
let cerrarPublicacion = document.querySelectorAll(".cerrar_modal_P")[0];
let modalPublicacion2 = document.querySelectorAll(".modal_P")[0];
publicaciones.addEventListener("click", function () {

    modalPublicacion.style.opacity = "1";
    modalPublicacion.style.visibility = "visible";
    modalPublicacion2.classList.toggle("modal_cerrado_P")


})
cerrarPublicacion.addEventListener("click", function () {
    modalPublicacion2.classList.toggle("modal_cerrado_P");
    setTimeout(function () {
        modalPublicacion.style.opacity = "0";
        modalPublicacion.style.visibility = "hidden";
    }, 900)
})
let C1 = document.querySelectorAll(".C")[0];
let E1 = document.querySelectorAll(".E")[0];
let P1 = document.querySelectorAll(".P")[0];
let B1 = document.querySelectorAll(".B")[0];
let C = document.querySelectorAll(".modal_crear")[0];
let E = document.querySelectorAll(".modal_editar")[0];
let P = document.querySelectorAll(".modal_publicar")[0];
let B = document.querySelectorAll(".modal_borrar")[0];

C1.addEventListener("click", function () {
    C.style.visibility = "visible"
    C.style.height = "60%";
    E.style.visibility = "hidden";
    E.style.height = "0px";
    P.style.visibility = "hidden";
    P.style.height = "0px";
    B.style.visibility = "hidden";
    B.style.height = "0px";
})
E1.addEventListener("click", function () {
    E.style.visibility = "visible"
    E.style.height = "auto";
    C.style.visibility = "hidden";
    C.style.height = "0px";
    P.style.visibility = "hidden";
    P.style.height = "0px";
    B.style.visibility = "hidden";
    B.style.height = "0px";
})
P1.addEventListener("click", function () {
    P.style.visibility = "visible"
    P.style.height = "auto";
    E.style.visibility = "hidden";
    E.style.height = "0px";
    C.style.visibility = "hidden";
    C.style.height = "0px";
    B.style.visibility = "hidden";
    B.style.height = "0px";
})
B1.addEventListener("click", function () {
    B.style.visibility = "visible"
    B.style.height = "auto";
    E.style.visibility = "hidden";
    E.style.height = "0px";
    P.style.visibility = "hidden";
    P.style.height = "0px";
    C.style.visibility = "hidden";
    C.style.height = "0px";
})

/***check */
function popUp(URL) {
    window.open(URL, 'Terminos y Condiciones', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=500,height=500,left = 390,top = 50');
}