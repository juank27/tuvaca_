//const { Router } = require('express');
//const multer = require('multer')
const { storage } = require('./firebaseCloud');//importar la base de datos
const { db, } = require('./firebase');//importar la base de datos
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
//const router = Router();
//const storageLocal = multer.memoryStorage();
//const upload = multer({ storage: storageLocal });

class envioImg {
	getDate() {
		let date = new Date();
		let fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		return fecha;
	}
	// funciones para guardar imagenes en firebase storage
	sendImages(files, callback, data, req) {
		//console.log(files);

		//console.log(files);
		//ref de la imagen y asignacion de nombre unico
		if(files!==undefined){
			const storageRef = ref(
				storage,
				'acarreos/' + new Date().getTime() + files.originalname
			);
			const metadata = {
				contentType: files.mimetype,
			};
			uploadBytes(storageRef, files.buffer, metadata)
				.then((snapshot) => {
					//generar url de descarga de la imagen
					getDownloadURL(ref(storage, snapshot.metadata.fullPath))
						.then((url) => {
							//envio de datos a la funcion callback para guardar en firebase
							//callback(url, text1, text2);
							callback(data, url, req);
						})
						.catch((error) => {
							//console.log(error);
						});
				})
				.catch((error) => {
					////console.log(error);
				});
		}
	}
	// funciones para guardar imagenes en firebase storage
	sendImagesPerfil(files, id, callback) {
		//console.log(files);
		//ref de la imagen y asignacion de nombre unico
		const storageRef = ref(
			storage,
			'perfil/' + new Date().getTime() + files.originalname
		);
		const metadata = {
			contentType: files.mimetype,
		};
		uploadBytes(storageRef, files.buffer, metadata)
			.then((snapshot) => {
				//generar url de descarga de la imagen
				getDownloadURL(ref(storage, snapshot.metadata.fullPath))
					.then((url) => {
						//envio de datos a la funcion callback para guardar en firebase
						//callback(url, text1, text2);
						let data = {
							photo: url,
						};
						callback("users", id, data)
							.then((result) => {
							})
							.catch((error) => {
								//console.log(error);
							});
					})
					.catch((error) => {
						//console.log(error);
					});
			})
			.catch((error) => {
				//console.log(error);
			});
	}
	//funcion para guardar publicaciones
	async enviarPublication(data, url, req) {
		let fecha = new envioImg();
		data.updatedAt = fecha.getDate();
		data.url = url;
		// data.iduser = globalThis.idUser;
		data.iduser = req.session.idUser;
		const publication = await db.collection('acarreos').add(data);
		//console.log(publication.id);
		return publication.id;
	}
	//funcion para guardar publicaciones
	async editData(id, url) {
		const dataupdate = db.collection("acarreos").doc(id);
		await dataupdate.update({url: url});
	}
	precio(data) {
		for(ubication of data){
			if (Object.ubication === "ubication" || Object.ubication === "tipoveh" || Object.ubication === "descripcion"){
				//...
			}
			Object.ubication = "$"+ Object[ubication];
		}
		return data;
	}
}

module.exports = envioImg;