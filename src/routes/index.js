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

//clave nayis -> gKG0mb2v5qWE4CGYG5nUH5oLaBi2
// new user email
router.post('/new-user', async (req, res) => {
	console.log('hola dentro de ');
	let { password, confirmPassword, email, phone, ubication, name } = req.body;

	if (password !== confirmPassword) {
		let text = 'Las contraseñas no coinciden';
		res.send(text);
	} else {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				//console.log(user);
				//console.log('registro exitoso');
				// ...
				const userRef = auth.currentUser;
				//obteniendo el id del usuario userRef.uid
				console.log(userRef.uid);
				db.collection('users').doc(userRef.uid).set({
					name,
					email,
					phone,
					ubication,
				})
				res.send('new user');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log('error', error);
			});
	}
});
//ba5Rv6P2s0PKHhhipvk8KilICEI3
router.post('/new-userr', async (req, res) => {
	console.log('hola dentro del segundo registro');
	registrar(globalThis.email, globalThis.password);
});
module.exports = router;