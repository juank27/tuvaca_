const { Router } = require('express');
const multer = require('multer')
const { storage } = require('../firebaseCloud');//importar la base de datos
const { ref, uploadBytes, getDownloadURL, uploadString } = require ("firebase/storage");
const { db, } = require('../firebase');//importar la base de datos

const router = Router();
//const storageCloud = getStorage();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });


router.get('/imga', (req, res) => {
	res.render('img', {layout: false});
});

// envio de imagenes al servidor en firebase storage
router.post('/imagen', upload.array('imagen[]', 3),  async (req, res) =>{
	let files = req.files;
	sendImages(files, enviar);
	res.send('enviado');
});
//imagen prueba con seleccion de imagenes data_url
router.post('/imagenPrueba', (req, res) => {
	const { text } = req.body;
	//console.log(text);
	// --------------------------------
	//let a = text.split(';');
	//let modifi = a[0].replace('data:', ''); //tenemos el tipo de imagen
	//console.log(modifi);
	const storageRef = ref(
		storage,
		'images/' + new Date().getTime()
	);
	uploadString(storageRef, text, 'base64url')
		.then((snapshot) => {
			res.send("listo");
		});
	//---------------------------------
});
//imagen prueba con seleccion de imagenes con multer
let multpleInput = upload.fields([
	{ name: 'input0' },
	{ name: 'input1' },
	{ name: 'input2' },
	{ name: 'input3' },
	{ name: 'input4' }
]);
// envio de imagenes al servidor en firebase storage
router.post('/imagen', upload.array('imagen[]', 3),  async (req, res) =>{
	let files = req.files;
	sendImages(files, enviar);
	res.send('enviado');
});
router.post('/multiple_input', multpleInput, (req, res) => {
	let files = req.files;
	//let inputt = "input"+1;
	// console.log(files[inputt][0].originalname);
	// console.log(Object.keys(files).length);
	sendImages(files, enviar);
	res.send('recibidos');
});
// funciones para guardar imagenes en firebase storage
function sendImages(files, callback) {
	console.log(files);
	for (let index = 0; index < Object.keys(files).length; index++) {
		let inputt = "input" + index;
		const storageRef = ref(
			storage,
			'images/' + new Date().getTime() + files[inputt][0].originalname
		);
		const metadata = {
			contentType: files[inputt][0].mimetype,
		};
		uploadBytes(storageRef, files[inputt][0].buffer, metadata)
			.then((snapshot) => {
				console.log('Uploaded a blob or file!');
				console.log(snapshot.metadata.fullPath);
				getDownloadURL(ref(storage, snapshot.metadata.fullPath))
					.then((url) => {
						console.log(url);
						callback(url);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
// funciones para guardar imagenes en firebase storage
function sendImagess(files, callback) {
	for (let index = 0; index < files.length; index++) {
		const storageRef = ref(
			storage,
			'images/' + new Date().getTime() + files[index].originalname
		);
		const metadata = {
			contentType: files[index].mimetype,
		};
		uploadBytes(storageRef, files[index].buffer, metadata)
			.then((snapshot) => {
				console.log('Uploaded a blob or file!');
				console.log(snapshot.metadata.fullPath);
				getDownloadURL(ref(storage, snapshot.metadata.fullPath))
					.then((url) => {
						console.log(url);
						callback(url);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
//funcion para guardar publicaciones
function enviar(url) {
	db.collection('nuevo').doc().set({
		hola: 'hola',
		url,
	});
}
module.exports = router;