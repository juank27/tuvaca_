const { Router } = require('express');
const multer = require('multer')
const { storage } = require('../firebaseCloud');//importar la base de datos
const { ref, uploadBytes, getDownloadURL } = require ("firebase/storage");
const { db, } = require('../firebase');//importar la base de datos

const router = Router();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });

//ruta del render para la prueba con imagenes
router.get('/imga', (req, res) => {
	res.render('img', {layout: false});
});

//imagen prueba con seleccion de imagenes con multer
let multpleInput = upload.fields([
	{ name: 'input0' },
	{ name: 'input1' },
	{ name: 'input2' },
	{ name: 'input3' },
	{ name: 'input4' }
]);

//envio post de imagenes con multer y firebase storage
router.post('/multiple_input', multpleInput, (req, res) => {
	let files = req.files;
	//-> files[inputt][0].originalname forma para ingresar a los datos
	//Object.keys(files).length -> longitud de los archivos que se subieron
	sendImages(files, enviar);
	res.send('recibidos');
});
// -------------------------- Funciones necesarias -------------------------------------
// funciones para guardar imagenes en firebase storage
function sendImages(files, callback) {
	console.log(files);
	for (let index = 0; index < Object.keys(files).length; index++) {
		let inputt = "input" + index; //name del input
		//ref de la imagen y asignacion de nombre unico
		const storageRef = ref(
			storage,
			'images/' + new Date().getTime() + files[inputt][0].originalname
		);
		const metadata = {
			contentType: files[inputt][0].mimetype,
		};
		uploadBytes(storageRef, files[inputt][0].buffer, metadata)
			.then((snapshot) => {
				//generar url de descarga de la imagen
				getDownloadURL(ref(storage, snapshot.metadata.fullPath))
					.then((url) => {
						//envio de datos a la funcion callback para guardar en firebase
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