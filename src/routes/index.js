const { Router } = require('express');
const { db,} = require('../firebase');//importar la base de datos
const { dbFirebase, app, auth, provider, user} = require('../firebaseCloud');//importar la base de datos
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

let mensaje = undefined; //mensaje de error
let estado=false; //estado de la sesion
//verificando estados de la sesion con las rutas
function verificarEstado(res, ruta, ruta2, callback){
	//console.log(mensaje);
	if (estado) {
		console.log('home raiz');
		// res.render('home');
		callback();
		res.render(ruta);
	} else if (mensaje !== undefined) {
		let mensajeError = mensaje;
		mensaje = undefined;
		res.render('InicioSesion', { layout: false, mensajeError });
	}	else {
		console.log('raiz raiz');
		// res.render('index')
		res.render( ruta2, { layout: false });
	}
}
router.get('/', async (req, res) => {
	verificarEstado(res, 'publicaciones', 'index', () => {});
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
	let { passwordd, confirmPassword, email, phone, ubication, name } = req.body;

	if (passwordd !== confirmPassword) {
		let text = 'Las contraseñas no coinciden';
		res.send(text);
	} else {
		createUserWithEmailAndPassword(auth, email, passwordd)
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
				});
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
router.post('/register-google', async (req, res) => {
	let {nameb, emailb, id, phone, ubication, photo } = req.body;
	let name = nameb;
	let email = emailb;
	setPersistence(auth, browserSessionPersistence)
		.then(() => {
			db.collection('users').doc(id).set({
				name,
				email,
				phone,
				ubication,
				photo,
			});
			console.log('si entre');
			estado = true;
			res.redirect('/publicaciones');
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			res.send(errorCode)
		});
});

//-------------------- Logins ----------------------//
//login user email
router.post('/login-email',  async(req, res) => {
	let { email, password } = req.body;
	setPersistence(auth, browserSessionPersistence)
	//console.log('entro')
		.then(() => {
			console.log('aca si entro');
			//res.render('home');
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log('Login exitoso');
					estado = true;
					mensaje = undefined;
					res.redirect('/publicaciones');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					//console.log('error', errorCode);
					//res.sendStatus(errorCode).send(errorMessage);
					console.log(typeof(errorCode));
					console.log('error del codigooo ', errorCode);
					//res.render('error', { layout: false });
					console.log('Este es el mensaje de error ', errorMessage);

					if (errorCode === 'auth/user-not-found') {
						mensaje = 'El usuario no existe';
						res.redirect('/iniciosesion');
					} else{
						mensaje = 'Contraseña incorrecta O intenta iniciar con Google o Facebook';
						res.redirect('/iniciosesion');
					}
				});
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log('error del codigooo ', errorCode);
			//res.render('error', { layout: false });
			console.log('Este es el mensaje de error ', errorMessage);
		});
});
//login with google
router.post('/login-google', async (req, res) => {
	let { email } = req.body;
	console.log('estoy en el backend');
	console.log(typeof(email));
	let users = db.collection('users');
	let verific = await users.where('email', '==', email).get();
	if (verific.empty) {
		//redireccion al mensaje de error porque el email no esta registrado
		// en la bdd
		mensaje = 'El usuario no existe';
		res.redirect('/iniciosesion');
	} else {
		estado = true;
		mensaje = undefined;
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				res.redirect('/publicaciones');
			})
	}
	// res.send(verific.email);
});


router.get('/iniciosesion', async(req, res) => {
	//res.render('InicioSesion');
	verificarEstado(res, 'publicaciones', 'InicioSesion', () => {
		//...
	});
});
router.get('/registro', async(req, res) => {
	//res.render('InicioSesion');
	verificarEstado(res, 'publucaciones', 'registro', () => {
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

router.get('/consulta', async(req, res) => {
	let users = db.collection('users');
	//consulta con la condicion
	let querySnapshot = await users.where('email', '==', 'nayibepelaez03@gmail.com').get();
	console.log('imprimiendo contenido');
	//obtener los datos de la consulta en un nuevo objeto
	let userRegister = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	console.log(typeof(userRegister));//-> salida: object
	console.log(userRegister);//-> Estructura de datos
	if (userRegister.length > 0) {
		console.log('existe');
		res.send(userRegister[0].email);
	} else {
		console.log('no existe');
		res.send('no existe');
	}
	//[
	// 	{
	// 		id: 'SWf7jxis7lSTY7sd87RpZ2eN8B63',
	// 			phone: '3112465403',
	// 				email: 'camilo@gmail.com',
	// 					ubication: 'Carmen de Carupa',
	// 						name: 'Camilo Ruiz'
	// 	}
	// ]
   // para acceder a los datos del objeto
	//res.send(userRegister[0].email);
});

async function verficEmail(email, callback) {
	let users = db.collection('users');
	//consulta con la condicion
	let querySnapshot = await users.where('email', '==', email).get();
	if (querySnapshot.empty) {
		//no esta registrado el email
		callback();
	} else {
		//ya esta registrado el email
		res.render()
	}
}


module.exports = router;