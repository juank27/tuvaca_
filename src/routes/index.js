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
let estado=false;
function verificarEstado(){
	if(estado){
		console.log('home raiz');
		// res.render('home');
		return 'home';
	}else{
		console.log('raiz raiz');
		// res.render('index')
		return 'index';
	}
}
router.get('/', async (req, res) => {
	res.render(verificarEstado());
});

router.get('/home', async(req, res) => {
	res.render(verificarEstado());

});
router.get('/InicioSesion', async(req, res) => {
	res.render('InicioSesion');

});
console.log(estado)
// //logout
router.use('/logout',   async (req, res, next) => {
	auth.signOut().then(() => {
		// Sign-out successful.
		estado=false;
		console.log('logout');
		//next();
		res.redirect('/');
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
				res.render('InicioSesion');
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
	let render;
	
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
			estado=true;
			res.redirect('/home');
			//console.log(user);
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


});



module.exports = router;