const express = require('express');//ayuda a crear un servidor
const morgan = require('morgan'); //sirve para mostrar los request en consola
const {db} = require('./firebase');//importar la base de datos

const app = express();
app.use(morgan('dev'));

app.get('/', async(req, res) => {
	//traer los datos de la consulta
	const querySnapshot = await db.collection('users').get();
	console.log(querySnapshot.docs[0].data());
	res.send('Hello World');
});


module.exports = app;