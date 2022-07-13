//Configuracion de firebase
require("dotenv").config(); //Importar variables de entorno

const {initializeApp, applicationDefault} = require("firebase-admin/app");
const {getFirestore} = require('firebase-admin/firestore');

initializeApp({
	credential : applicationDefault()
})

const db = getFirestore();

module.exports = {
	db,
}