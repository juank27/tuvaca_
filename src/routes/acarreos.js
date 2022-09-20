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
//nuevo acarreo
router.post('/new-acarreo', upload.single('vehiculo'), (req, res) => {
	let img = req.file;
	let data = {
		otro_R,
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

	if(tipoveh === 'Otro'){
		data.tipoveh = otro_R;
	}

	console.log("-------------------");
	console.log(data);
	console.log("-------------------");
	console.log(img);
	imagen.sendImages(img, imagen.enviarPublication, data, req);
	res.redirect('/acarreos');
});

//edit acarreo
router.post('/edit-acarreo', upload.single('vehiculo'), async(req, res) => {
	let img = req.file;
	let data = {
		otro_R,
		id,
		url : vehiculof,
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

	if (tipoveh === 'Otro') {
		data.tipoveh = otro_R;
	}
	let a = data;
	data['updatedAt'] = imagen.getDate();
	imagen.sendImages(img, imagen.editData, id, req);
	const dataupdate = db.collection("acarreos").doc(id);
	await dataupdate.update(data);
	res.redirect('/misacarreos');
});

module.exports = router;