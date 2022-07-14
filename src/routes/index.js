const { Router } = require('express');
const { db } = require('../firebase');//importar la base de datos

const router = Router();

router.get('/users', async (req, res) => {
	//traer los datos de la consulta
	const querySnapshot = await db.collection('users').get();
	//console.log(querySnapshot.docs[0].data());
	//obteniendo todos los usuarios
	const users = querySnapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data()
	}));
	console.log(users);
	res.send('Hello World');
});

router.post('/new-user', (req, res) => {
	//crear un nuevo usuario
	const { name, email, password, phone, ubication } = req.body;
	console.log(name, email, password, phone, ubication);
	res.send('new user');
});
module.exports = router;