

let abrirSesion;
let id;
let cerrarSesion = document.querySelectorAll(".cerrar_modal_p")[0];
let modalSesion = document.querySelectorAll(".modal_container_p")[0];
let modalSesion2 = document.querySelectorAll(".modal_p")[0];
let publicación = document.getElementById("publicacion");
let id2 = document.getElementById("id2");
let framer = document.getElementById("framer");

function posicion(valor) {
    // framer.contentDocument.location.reload(true);
    // id=document.querySelectorAll(".id")[valor].value;
    // id2.value=id;
    // publicación.submit();
    setTimeout(function () {
        modal()
    }, 1000);
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
    }, 900)
})

/************modal tres puntos******/
let abrirSesiona = document.querySelectorAll(".publicacion_mas")[0];
let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[0];
let modalSesion2b = document.querySelectorAll(".modal_container_t")[0];
let modalSesion22b = document.querySelectorAll(".modal_t")[0];

abrirSesiona.addEventListener("click", function () {
    modalSesion2b.style.opacity = "1";
    modalSesion2b.style.visibility = "visible";
})

cerrarSesiona.addEventListener("click", function () {
    setTimeout(function () {
        modalSesion2b.style.opacity = "0";
        modalSesion2b.style.visibility = "hidden";
    }, 900)
})
/************modal ajustes******/
let abrirSesionb = document.querySelectorAll(".dos")[0];
let cerrarSesionb = document.querySelectorAll(".cerrar_modal_h")[0];
let modalSesion2c = document.querySelectorAll(".modal_container_h")[0];
let modalSesion22c = document.querySelectorAll(".modal_h")[0];

abrirSesionb.addEventListener("click", function () {
    modalSesion2c.style.opacity = "1";
    modalSesion2c.style.visibility = "visible";
    modalSesion22c.classList.toggle("modal_cerrado_h");
})

cerrarSesionb.addEventListener("click", function () {
    modalSesion22c.classList.toggle("modal_cerrado_h");
    setTimeout(function () {
        modalSesion2c.style.opacity = "0";
        modalSesion2c.style.visibility = "hidden";
    }, 900)
})

/****elegir foto de perfil */
let f5 = document.querySelectorAll(".foto_selector")[0];
let c_5 = document.querySelectorAll(".perfil")[0];
let ct_5 = document.querySelectorAll(".foto_perfil")[0];
let guardar= document.querySelectorAll(".subir")[0];

/****input 5******/
f5.addEventListener("click", function () {
    c_5.click();
})
c_5.addEventListener("change", function () {
    var files = this.files;
    visualizar(files[0]);
})

/*******funciones*******/
function visualizar(file) {
    var imgCodified = URL.createObjectURL(file);
    ct_5.style.backgroundImage =`url(${imgCodified})`;
    guardar.style.display="flex";
}
