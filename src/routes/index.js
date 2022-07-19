const { Router } = require('express');
const { db,} = require('../firebase');//importar la base de datos
const { dbFirebase, app, auth} = require('../firebaseCloud');//importar la base de datos
const { createUserWithEmailAndPassword } = require('firebase/auth');


const router = Router();
/*
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
//crear un nuevo usuario
router.post('/new-userr', async(req, res) => {
	//crear un nuevo usuario
	const { name, email, password, phone, ubication } = req.body;
	await db.collection('users').add({
		name,
		email,
		password,
		phone,
		ubication
	})
	res.send('new user');
});
*/
//crear un nuevo usuario
function registrar(email, password) {
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
}

router.post('/new-user', async (req, res) => {
	console.log('hola dentro de ');
	let { password, confirmPassword, email } = req.body;

	if (password !== confirmPassword) {
		let text = 'Las contraseñas no coinciden';
		res.send('/src/public/index.html',text);
	} else {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				res.send('new user');
				console.log(user);
				console.log('registro exitoso');
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log('error', error);
			});
	}
});

router.post('/new-userr', async (req, res) => {
	console.log('hola dentro del segundo registro');
	registrar(globalThis.email, globalThis.password);
});
module.exports = router;