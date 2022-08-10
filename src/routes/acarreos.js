const { Router } = require('express');
const multer = require('multer')
const { storage } = require('../firebaseCloud');//importar la base de datos
//import { idUser } from "../routes/index";
//let id = require('../routes/index');//importar el id del usuario
const { ref, uploadBytes, getDownloadURL } = require ("firebase/storage");
const { db, } = require('../firebase');//importar la base de datos

const router = Router();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });

//ruta del render para la prueba con imagenes
router.get('/imga', (req, res) => {
	console.log('------------------------------------');
	//console.log(id.getUser());
	console.log(globalThis.idUser);
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
router.post('/new_publication', multpleInput, (req, res) => {
	let files = req.files;
	let data = {
		ubication,
		categoria,
		edad,
		raza,
		producto,
		precio,
		prenada,
		tipoprenada,
		toro,
		meses,
		primeriza,
		nprenadas,
		descripcion,
	} = req.body;
	data.toro = 'Con toro ' + toro;
	data.meses = meses + ' Meses';
	data.nprenadas = nprenadas + ' Embarazos';
	let publication = {
		iduser : globalThis.idUser,
		...data,
		input0: '',
		input1: '',
		input2: '',
		input3: '',
		input4: '',
	};
	console.log(publication);
	//guardar publicaciones en firebase database
	enviarPublication(publication);
	//-> files[inputt][0].originalname forma para ingresar a los datos
	//Object.keys(files).length -> longitud de los archivos que se subieron
	//sendImages(files, enviar, text1, text2);
	res.send('recibidos');
});
// -------------------------- Funciones necesarias -------------------------------------
// funciones para guardar imagenes en firebase storage
function sendImages(files, callback, text1, text2) {
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
						//callback(url, text1, text2);
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
function enviarPublication(data) {
	db.collection('publications').doc().set(data);
}

//extraer datos de la promesa con la URL de la imagen
function extraer(url) {
	return url;
}

module.exports = router;