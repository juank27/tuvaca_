const { Router } = require('express');
const multer = require('multer')
const { storage } = require('../firebaseCloud');//importar la base de datos
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { db, } = require('../firebase');//importar la base de datos

const  envioImg  = require('../functions');

const router = Router();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });
var imagen = new envioImg();
//ruta del render para la prueba con imagenes
router.get('/imgaa', (req, res) => {
	console.log('------------------------------------');
	//console.log(id.getUser());
	//console.log(globalThis.idUser);
	console.log(imagen.getDate());
	res.render('img', { layout: false });
});

router.post('/new-acarreo', upload.single('vehiculo'), (req, res) => {
	let img = req.file;
	let data = {
		ubication,
		tipoveh,
		ubate,
		carupa,
		tausa,
		suta,
		lenguazaque,
		guacheta,
		simijaca,
		susa,
		cucunuba,
		descripcion,
	} = req.body;
	data.ubate = "$" + data.ubate;
	data.carupa = "$" + data.carupa;
	data.tausa = "$" + data.tausa;
	data.suta = "$" + data.suta;
	data.lenguazaque = "$" + data.lenguazaque;
	data.guacheta = "$" + data.guacheta;
	data.simijaca = "$" + data.simijaca;
	data.susa = "$" + data.susa;
	data.cucunuba = "$" + data.cucunuba;
	console.log("-------------------");
	console.log(data);
	console.log("-------------------");
	console.log(img);
	imagen.sendImages(img, imagen.enviarPublication, data);
	res.redirect('/acarreos');
});

module.exports = router;