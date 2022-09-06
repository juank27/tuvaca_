let abrirSesion;
let id;
let cerrarSesion = document.querySelectorAll(".cerrar_modal_p")[0];
let modalSesion = document.querySelectorAll(".modal_container_p")[0];
let modalSesion2 = document.querySelectorAll(".modal_p")[0];
let publicación = document.getElementById("publicacion");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let framer = document.getElementById("framer");
/****cargar foto peril */
let foto_perfil = document.getElementById("foto_perfil");
function cargar(){
    per.style.backgroundImage=(`url(${foto_perfil.value})`);
    per.style.boxShadow="0px 4px 4px 0px #A96224"
}
/*****modal de las vacas */
function posicion(valor) {
    framer.contentDocument.location.reload(true);
    id=document.querySelectorAll(".id")[valor].value;
    id2.value=id;
    publicación.submit();
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

/****tres puntos */
/**abrir */
function posicion5(valor) {
    let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[valor];
    let modalSesion2b = document.querySelectorAll(".modal_container_t")[valor];
    let modalSesion22b = document.querySelectorAll(".modal_t")[valor];
    modalSesion2b.style.opacity = "1";
    modalSesion2b.style.visibility = "visible";
}
/**cerrar */
function posicion6(valor) {
    let cerrarSesiona = document.querySelectorAll(".cerrar_modal_t")[valor];
    let modalSesion2b = document.querySelectorAll(".modal_container_t")[valor];
    let modalSesion22b = document.querySelectorAll(".modal_t")[valor];
    setTimeout(function () {
        modalSesion2b.style.opacity = "0";
        modalSesion2b.style.visibility = "hidden";
    }, 200)
}
/******opcion eliminar */
function eliminar(valor) {
    let modalElimar = document.querySelectorAll(".modal_container_e")[valor];
    modalElimar.style.opacity = "1";
    modalElimar.style.visibility = "visible";
}
function posicionE(valor) {
    let perfile = document.getElementById("perfilE");
    id = document.querySelectorAll(".id")[valor].value;
    let id4 = document.getElementById("id4");
    id4.value = id;
    console.log(id);
    perfile.click();
}
function eliminarS(valor) {
    window.location="/perfil"
}

/****opcion editar */
function posicion2(valor) {
    let perfils = document.getElementById("perfilS");
    id = document.querySelectorAll(".id")[valor].value;
    id3.value = id;
    perfils.click();
}
/***opcion estado */
function estado(valor) {
    let modalEstado2b = document.querySelectorAll(".modal_container_s")[valor];
let modalEstado22b = document.querySelectorAll(".modal_s")[valor];
    modalEstado2b.style.opacity = "1";
    modalEstado2b.style.visibility = "visible";
    modalEstado22b.classList.toggle("modal_cerrado_s");

}
/**no vendida */
function posicionEs(valor) {
    let perfiles = document.getElementById("perfilEs");
    id = document.querySelectorAll(".id")[valor].value;
    id5.value = id;
    perfiles.click();
}
/**vendida */
function estadoc(valor) {
    let modalElimar = document.querySelectorAll(".modal_container_e")[valor];
    let modalEstado2b = document.querySelectorAll(".modal_container_s")[valor];
    modalElimar.style.opacity = "1";
    modalElimar.style.visibility = "visible";
    setTimeout(function () {
        modalEstado2b.style.opacity = "0";
        modalEstado2b.style.visibility = "hidden";
    }, 900)
}


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
function posicionA(valor) {
    let _name = document.querySelectorAll(".nombre")[valor].value;
    let phone = document.querySelectorAll(".phone")[valor].value;
    let categoria = document.querySelectorAll(".categoria")[valor].value;
    let yo = document.getElementById("yo");

    let url = "https://api.whatsapp.com/send?phone=57" + phone + "&text=Hola%20" + _name + ",%20yo%20soy%20" + yo.innerHTML + "%20y%20quisiera%20saber%20la%20tarifa%20para%20un%20acarreo%20con%20el%20vehiculo%20tipo%20" + categoria + ",%20muchas%20gracias.";
    window.open(url);
}
function posicionU(valor) {
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