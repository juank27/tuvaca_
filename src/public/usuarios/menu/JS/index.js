/*****************************menu*******************************/
let pub = document.getElementById('pub');
let crear = document.getElementById('crear');
let car = document.getElementById('car');
let chat = document.getElementById('chat');
let per = document.getElementById('per');
let framer = document.getElementById('framer');

pub.addEventListener('click', function () {
    pub.style.backgroundImage = 'url("./usuarios/menu/icons/Cow.png")';
    pub.style.transition = "0.2s"
    crear.style.backgroundImage = 'url("./usuarios/menu/icons/Sum.png")';
    crear.style.transition = "0.2s";
    car.style.backgroundImage = 'url("./usuarios/menu/icons/Truck.png")';
    car.style.transition = "0.2s";
    per.style.boxShadow = ' none';
    per.style.transition = "0.2s";
    framer.src='publicaciones';

})
crear.addEventListener('click', function () {
    pub.style.backgroundImage = 'url("./usuarios/menu/icons/Cow-1.png")';
    pub.style.transition = "0.2s"
    crear.style.backgroundImage = 'url("./usuarios/menu/icons/Sum2.png")';
    crear.style.transition = "0.2s";
    car.style.backgroundImage = 'url("./usuarios/menu/icons/Truck.png")';
    car.style.transition = "0.2s";
    per.style.boxShadow = ' none';
    per.style.transition = "0.2s";
    framer.src='crearPublicacion';

})
car.addEventListener('click', function () {
    pub.style.backgroundImage = 'url("./usuarios/menu/icons/Cow-1.png")';
    pub.style.transition = "0.2s"
    crear.style.backgroundImage = 'url("./usuarios/menu/icons/Sum.png")';
    crear.style.transition = "0.2s";
    car.style.backgroundImage = 'url("./usuarios/menu/icons/Truck2.png")';
    car.style.transition = "0.2s";
    per.style.boxShadow = ' none';
    per.style.transition = "0.2s";
    framer.src='acarreos';
})

per.addEventListener('click', function () {
    pub.style.backgroundImage = 'url("./usuarios/menu/icons/Cow-1.png")';
    pub.style.transition = "0.2s"
    crear.style.backgroundImage = 'url("./usuarios/menu/icons/Sum.png")';
    crear.style.transition = "0.2s";
    car.style.backgroundImage = 'url("./usuarios/menu/icons/Truck.png")';
    car.style.transition = "0.2s";
    per.style.boxShadow = ' 0 4px 4px 0 #A96224';
    per.style.transition = "0.2s";
    framer.src='perfil';
})
