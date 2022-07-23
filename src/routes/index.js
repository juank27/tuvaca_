const { Router } = require('express');
const { db,} = require('../firebase');//importar la base de datos
const { dbFirebase, app, auth, provider} = require('../firebaseCloud');//importar la base de datos
const {  createUserWithEmailAndPassword,
			signInWithEmailAndPassword,
			onAuthStateChanged,
			signOut,
			browserSessionPersistence,
			setPersistence, //percistencia de la sesion
			signInWithPopup,
			signInWithRedirect,
			getRedirectResult,
			GoogleAuthProvider,
		} = require('firebase/auth');

const router = Router();

let estado=false; //estado de la sesion
//verificando estados de la sesion con las rutas
function verificarEstado(res, ruta, ruta2, callback){
	if (estado) {
		console.log('home raiz');
		// res.render('home');
		callback();
		res.render(ruta);
	} else {
		console.log('raiz raiz');
		// res.render('index')
		res.render( ruta2, { layout: false });
	}
}
router.get('/', async (req, res) => {
	verificarEstado(res, 'publicaciones', 'index');
});

console.log(estado)

// //logout
router.use('/logout',   async (req, res, next) => {
	auth.signOut().then(() => {
		// Sign-out successful.
		estado = false;
		console.log('logout');
		//next();
		res.redirect('/');
	}).catch((error) => {
		// An error happened.
	});
});
// ----------------- register ----------------- //
// new user email
router.post('/new-user-email', async (req, res) => {
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
				res.redirect('/iniciosesion');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log('fatal', errorCode);
				//res.sendStatus(errorCode).send(errorMessage);
			});
	}
});

//register with google
router.get('/holas', async (req, res) => {
	res.render
});

//-------------------- Logins ----------------------//
//login user email
router.post('/login-email',  async(req, res) => {
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
			res.redirect('/publicaciones');
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

router.get('/iniciosesion', async(req, res) => {
	//res.render('InicioSesion');
	verificarEstado(res, 'publicaciones', 'InicioSesion', () => {
		//...
	});
});

router.get('/publicaciones', async(req, res) => {
	verificarEstado(res, 'publicaciones', 'index', () => {
		//...
	});
});

router.get('/crearPublicacion', async(req, res) => {
	//res.render('crearPublicacion');
	verificarEstado(res, 'crearPublicacion', 'index', () => {
		//...
	});
});

router.get('/acarreos', async(req, res) => {
	//res.render('acarreos');
	verificarEstado(res, 'acarreos', 'index', () => {
	//...
	});
});

router.get('/perfil', async(req, res) => {
	//res.render('perfil');
	//verificarEstado(res, 'perfil', 'index');
	verificarEstado(res, 'perfil', 'index', () => {
		console.log('Estoy dentro del perfil con un callback');
	});
});

module.exports = router;