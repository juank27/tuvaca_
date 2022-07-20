const { Router } = require('express');
const { db,} = require('../firebase');//importar la base de datos
const { dbFirebase, app, auth} = require('../firebaseCloud');//importar la base de datos
const {  createUserWithEmailAndPassword,
			signInWithEmailAndPassword,
			onAuthStateChanged,
			signOut,
			browserSessionPersistence,
			setPersistence
		} = require('firebase/auth');
//const express = require('express');
//const router = express.Router();
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

//inicio de  tu vaca
/*
router.get('/home', async (req, res) => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			//validar si existe una sesion o no y redireccionar a la pagina principal
			const uid = user.uid;
			console.log('Logueado');
			console.log(uid);
			console.log(user.email);
			res.render('home');
			//return true
			// ...
		} else {
			console.log('sin loguear.');
			// User is signed out
			// ...
			res.render('index');
			//return false
		}
	});
	res.render('home');
})*/
// function verificar () {
// 	auth.onAuthStateChanged(async (user) => {
// 		if (user) {
// 			console.log('entre y si estoy logueado ---------------');
// 			return  true;
// 		} else {
// 			console.log('entree y no estoy logueado ----------------');
// 			return  false;
// 		}
// 	});
// }

//ruta inicial
router.get('/', async (req, res) => {
	// auth.onAuthStateChanged(async (user) => {
	// 	if (user) {
	// 		res.render('home');
	// 	} else {
	// 		res.render('index');
	// 	}
	// });
	//res.render('index');
	//------------------------------------------------------
	// let a = verificar();
	// console.log(verificar());
	// if (a) {
	// 	console.log('Logueado');
	// 	res.render('home');
	// } else {
	// 	console.log('sin loguear.');
	// 	res.render('index');
	// }
	//------------------------------------------------------
	auth.onAuthStateChanged(async (user) => {
		if (user) {
			console.log('entre y si estoy logueado ---------------');
			//return true;
			res.render('home');
		} else {
			console.log('entree y no estoy logueado ----------------');
			//return false;
			res.render('index');
		}
	});
});

router.get('/home', async(req, res) => {
	// auth.onAuthStateChanged(async (user) => {
	// 	if (user) {
	// 		res.render('home');
	// 	} else {
	// 		res.render('index');
	// 	}
	// });
	let a =  verificar();
	if (a) {
		res.render('home');
	} else {
		res.render('index');
	}
	//res.render('home');
});

// //logout
router.use('/logout',   async (req, res, next) => {
	auth.signOut().then(() => {
		// Sign-out successful.
		console.log('logout');
		//next();
		res.render('index');
	}).catch((error) => {
		// An error happened.
	});
});

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
router.post('/login',  async(req, res) => {
	let { email, password } = req.body;
	console.log(email, password);
	console.log(email, password);
	setPersistence(auth, browserSessionPersistence)
		.then(() => {
			//res.render('home');
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Login exitoso');
			//console.log(user);
			res.render('home');
			//next();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				//console.log('error', errorCode);
				//res.sendStatus(errorCode).send(errorMessage);
			});
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
		});

	// signInWithEmailAndPassword(auth, email, password)
	// 	.then((userCredential) => {
	// 		// Signed in
	// 		const user = userCredential.user;
	// 		console.log('Login exitoso');
	// 		//console.log(user);

	// 		setPersistence(auth, browserSessionPersistence)
	// 			.then(() => {
	// 				// Existing and future Auth states are now persisted in the current
	// 				// session only. Closing the window would clear any existing state even
	// 				// if a user forgets to sign out.
	// 				// ...
	// 				// New sign-in will be persisted with session persistence.
	// 				res.render('home');
	// 				return signInWithEmailAndPassword(auth, email, password);
	// 			})
	// 			.catch((error) => {
	// 				// Handle Errors here.
	// 				const errorCode = error.code;
	// 				const errorMessage = error.message;
	// 			});

	// 		})
	// 	.catch((error) => {
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		//console.log('error', errorCode);
	// 		//res.sendStatus(errorCode).send(errorMessage);
	// 	});
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