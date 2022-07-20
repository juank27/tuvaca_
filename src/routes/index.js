const { Router } = require('express');
const { db,} = require('../firebase');//importar la base de datos
const { dbFirebase, app, auth} = require('../firebaseCloud');//importar la base de datos
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');


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
*/

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
				console.log('error', errorCode);
				//res.sendStatus(errorCode).send(errorMessage);
			});
	}
});

//login user email
router.post('/login', async (req, res) => {
	let { email, password } = req.body;
	console.log(email, password);
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Login exitoso');
			//console.log(user);
			res.render('home');
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('error', errorCode);
			//res.sendStatus(errorCode).send(errorMessage);
		});
	//res.send('login');
});

/*
//nuevo usuario
router.post('/new-user', async (req, res) => {
	console.log('hola dentro de ');
	var { password, confirmPassword, email, phone, ubication, name } = req.body;
	console.log('--.-.-.-.-.-.-.-.-..-');
	console.log(req.body);
	var emaill = email;
	var namee = name;
	var phonee = phone;
	var ubicationn = ubication;
	var passwordd = password;
	console.log(emaill);
	console.log(namee);
	console.log(phonee);
	console.log(ubicationn);
	if (password !== confirmPassword) {
		let text = 'Las contraseñas no coinciden';
		res.send(text);
	} else {
		User.registrar(emaill, passwordd, namee, emaill, phonee, ubicationn);
		res.send('new user');
	}
});

//Registro en BDD
class User{
	static registroBDD (name, email, phone, ubication, id) {
		console.log('-.------------------------------------------------------');
		console.log(name);
		console.log(email);
		console.log(phone);
		console.log(ubication);
		db.collection('users').doc(id).set({
			name : name,
			email : email,
			phone : phone,
			ubication : ubication,
		})
	}
	//crear un nuevo usuario
	static registrar(email, password, name, phone, ubication) {
		console.log('dentro casiiiiiiiiii dentro  --------------------');
		console.log(name);
		console.log(email);
		console.log(phone);
		console.log(ubication);
		//const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				//console.log(user);
				//console.log('registro exitoso');
				// ...
				const userRef = auth.currentUser;
				console.log(userRef);
				const id = userRef.uid;
				//obteniendo el id del usuario userRef.uid
				console.log('dentro de registrarn --------------------');
				console.log(name);
				console.log(email);
				console.log(phone);
				console.log(ubication);
				User.registroBDD(name, email, phone, ubication, id);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log('error', error);
			});
	}
}

*/

module.exports = router;