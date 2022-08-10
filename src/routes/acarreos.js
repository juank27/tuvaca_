const { Router } = require('express');
const multer = require('multer')
const { storage } = require('../firebaseCloud');//importar la base de datos
//import { idUser } from "../routes/index";
//let id = require('../routes/index');//importar el id del usuario
const { ref, uploadBytes, getDownloadURL } = require ("firebase/storage");
const { db, } = require('../firebase');//importar la base de datos
const { async } = require('@firebase/util');

const router = Router();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });

//ruta del render para la prueba con imagenes
router.get('/imga', (req, res) => {
	console.log('------------------------------------');
	//console.log(id.getUser());
	//console.log(globalThis.idUser);
	let a = enviarPublication(
		{
			Ultimo: 'ultimo22222',
		}
	)
		.then(function (docRef) {
			console.log("Document written with ID: ", docRef);
		})
		.catch(function (error) {
			console.log('Ocurrio un error');
		});
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
	let fecha = getDate(); //obtener la fecha actual
	let publication = {
		createdAt : fecha,
		iduser : globalThis.idUser,
		...data,
		input0: '',
		input1: '',
		input2: '',
		input3: '',
		input4: '',
		updatedAt : fecha,
	};
	console.log(publication);
	//-> files[inputt][0].originalname forma para ingresar a los datos
	//Object.keys(files).length -> longitud de los archivos que se subieron
	//sendImages(files, enviar, text1, text2);
	//guardar publicaciones en firebase database
	enviarPublication(publication)
		.then(function (docRef) {
			//obtengo el id de la publicacion
			console.log("Document written with ID: ", docRef);
			sendImages(files,updateImage, docRef);
		})
		.catch(function (error) {
			console.log('Ocurrio un error');
		});
	res.send('recibidos');
});
// -------------------------- Funciones necesarias -------------------------------------
// funciones para guardar imagenes en firebase storage
function sendImages(files, callback, id) {
	//console.log(files);
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
						callback(id, url, inputt);
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
async	function enviarPublication(data) {
	const publication =  await db.collection('publications').add(data);
	console.log(publication.id);
	return publication.id;
}
async function updateImage(id, url, inputt) {
	//let inputUrl = inputt;
	//console.log('entre a la funcion updateImage');
	let updateData = {};
	updateData[inputt] = url;
	await db.collection('publications').doc(id).update(updateData);
	console.log('se actualizo la imagen');
}

//obtener la fecha actual en formato dd/mm/yyyy
function getDate() {
	let date = new Date();
	let fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return fecha;
}
//extraer datos de la promesa con la URL de la imagen
function extraer(url) {
	return url;
}

module.exports = router;