const { Router } = require('express');
const { db, } = require('../firebase');//importar la base de datos
const { dbFirebase, app, auth, provider, user } = require('../firebaseCloud');//importar la base de datos
const { createUserWithEmailAndPassword,
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
const { async } = require('@firebase/util');

const router = Router();
let buscarGlobal = "";
let mensaje = undefined; //mensaje de error
let estado = false; //estado de la sesion
let modal = true;
//verificando estados de la sesion con las rutas
function verificarEstado(res, ruta, ruta2, datos = '', callback) {
	//console.log(mensaje);
	if (estado) {
		console.log('home raiz');
		// res.render('home');
		callback();
		if (modal) {
			res.render(ruta, { datos });
		} else {
			res.render(ruta, { layout: false, datos });
			modal = true;
		}
	} else if (mensaje !== undefined) {
		let mensajeError = mensaje;
		mensaje = undefined;
		res.render(ruta2, { layout: false, mensajeError });
	} else {
		console.log('raiz raiz');
		// res.render('index')
		res.render(ruta2, { layout: false });
	}
}
router.get('/', async (req, res) => {
	publicaciones()
		.then((publicaciones) => {
			verificarEstado(res, 'publicaciones', 'index', publicaciones, () => {
				//...
			});
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});


console.log(estado)

// //logout
router.use('/logout', async (req, res, next) => {
	auth.signOut().then(() => {
		// Sign-out successful.
		estado = false;
		buscarGlobal="";
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
		mensaje = 'Las contraseñas no coinciden';
		res.redirect('/registro');
	} else {
		verficEmail(res, email, () => {
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
						photo: 'https://static.vecteezy.com/system/resources/previews/007/319/933/non_2x/black-avatar-person-icons-user-profile-icon-vector.jpg',
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
		});
	}
});

//register with google
router.post('/register-google', async (req, res) => {
	let { nameb, emailb, id, phone, ubication, photo } = req.body;
	let name = nameb;
	let email = emailb;
	verficEmail(res, email, () => {
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
});

//register with facebook
router.post('/register-facebook', async (req, res) => {
	let { nameb, emailb, id, phone, ubication, photo } = req.body;
	let name = nameb;
	let email = emailb;
	verficEmail(res, email, () => {
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
});
//-------------------- Logins ----------------------//
//login user email
router.post('/login-email', async (req, res) => {
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
					console.log(typeof (errorCode));
					console.log('error del codigooo ', errorCode);
					//res.render('error', { layout: false });
					console.log('Este es el mensaje de error ', errorMessage);
					if (errorCode === 'auth/user-not-found') {
						mensaje = 'El usuario no existe';
						res.redirect('/iniciosesion');
					} else {
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
	let { emailb } = req.body;

	let users = db.collection('users');
	let verific = await users.where('email', '==', emailb).get();
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
});

//login with facebook
router.post('/login-facebook', async (req, res) => {
	let { emailb } = req.body;
	let users = db.collection('users');
	let verific = await users.where('email', '==', emailb).get();
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
});

// ------------------- other actions ----------------------//
router.get('/iniciosesion', async (req, res) => {
	//res.render('InicioSesion');
	verificarEstado(res, 'publicaciones', 'InicioSesion', datos = '', () => {
		//...
	});
});
router.get('/registro', async (req, res) => {
	verificarEstado(res, 'publicaciones', 'registro', datos = '', () => {
		//...
	});
});
router.get('/publicacioness', async (req, res) => {
	publicaciones()
		.then((publicaciones) => {
			verificarEstado(res, 'publicaciones', 'index', publicaciones, () => {
				//...
			});
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});
router.get('/crearPublicacion', async (req, res) => {
	//res.render('crearPublicacion');
	verificarEstado(res, 'crearPublicacion', 'index', datos = '', () => {
		//...
	});
});

router.get('/acarreos', async (req, res) => {
	//res.render('acarreos');
	verificarEstado(res, 'acarreos', 'index', datos = '', () => {
		//...
	});
});

router.get('/perfil', async (req, res) => {
	//res.render('perfil');
	//verificarEstado(res, 'perfil', 'index');
	verificarEstado(res, 'perfil', 'index', datos = '', () => {
		console.log('Estoy dentro del perfil con un callback');
	});
});


router.get('/consulta', async (req, res) => {
	let users = db.collection('users');
	//consulta con la condicion
	let querySnapshot = await users.where('email', '==', 'nayibepelaez03@gmail.com').get();
	console.log('imprimiendo contenido');
	//obtener los datos de la consulta en un nuevo objeto
	let userRegister = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	console.log(typeof (userRegister));//-> salida: object
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
//usuarios
router.get('/consulta2', async (req, res) => {
	Users()
		.then((publicaciones) => { res.send(publicaciones); })
		.catch((error) => { console.log("No hay publicaiones", error); });
});
//publicaciones
router.get('/consulta3', async (req, res) => {
	publicaciones()
		.then((publicaciones) => { res.send(publicaciones); })
		.catch((error) => { console.log("No hay publicaiones", error); });
});
//unir publicacion con usuario
router.get('/publicaciones', async (req, res) => {
	publicaciones()
		.then((publicaciones) => {
			Users()
				.then((users) => {
					let publicacion = unir(publicaciones, users);
					//res.send(a);
					verificarEstado(res, 'publicaciones', 'index', publicacion, () => {
						//...
					});
				})
				.catch((error) => { console.log("No hay Usuarios", error); });
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});
router.post('/abrir-publicaciones', async (req, res) => {
	let { id_p } = req.body;
	console.log(id_p);
	console.log('abri publicaciones');
	publicaciones()
		.then((publicaciones) => {
			Users()
				.then((users) => {
					let publicacion = unir(publicaciones, users);
					let buscar = publicacion.find(function (element) {
						return element.id == id_p;
					});
					//console.log(buscar);
					//res.send(a);
					// verificarEstado(res, 'publicaciones', 'index', publicacion, () => {
					// 	//...
					// });
					buscarGlobal = buscar;
				})
				.catch((error) => { console.log("No hay Usuarios", error); });
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});
router.get('/modalpublicaciones', async (req, res) => {
	modal = false;
	console.log(buscarGlobal);
	verificarEstado(res, 'modalPublicaciones', 'index', buscarGlobal, () => {
		//...
	});
});
//funcion para verificar el email
async function verficEmail(res, email, callback) {
	let users = db.collection('users');
	//consulta con la condicion
	let querySnapshot = await users.where('email', '==', email).get();
	if (querySnapshot.empty) {
		//no esta registrado el email
		callback();
	} else {
		//ya esta registrado el email
		mensaje = 'El email ya esta registrado, inicia sesion';
		res.redirect('/iniciosesion');
	}
}

//traer todos los usuarios
async function Users() {
	let users = db.collection('users');
	//consulta con la condicion
	let querySnapshot = await users.get();
	//console.log('imprimiendo contenido');
	//obtener los datos de la consulta en un nuevo objeto
	let userRegister = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	console.log(typeof (userRegister));//-> salida: object
	//console.log(userRegister);//-> Estructura de datos
	if (userRegister.length > 0) {
		console.log('existe');
		return userRegister;
		//res.send(userRegister[0].email);
	} else {
		console.log('no existen mas publicaciones');
		//res.send('no existen publicaciones');
		return 'No hay publicaciones';
	}
}
//traer publicaciones
async function publicaciones() {
	let publications = db.collection('publications');
	//consulta con la condicion
	let querySnapshot = await publications.get();
	//console.log('imprimiendo contenido');
	//obtener los datos de la consulta en un nuevo objeto
	let userRegister = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	console.log(typeof (userRegister));//-> salida: object
	//console.log(userRegister);//-> Estructura de datos
	if (userRegister.length > 0) {
		console.log('existe');
		return userRegister;
	} else {
		console.log('no existen mas publicaciones');
		return 'No hay publicaciones';
	}
}

//funion para obtener las publicaciones
function unir(publicaciones, user) {
	let publicacionesUser = [];
	let union;
	publicaciones.forEach(element => {
		user.forEach(element2 => {
			if (element.iduser === element2.id) {
				console.log('entre');
				let use = {
					name: element2.name,
					phone: element2.phone,
					ubication: element2.ubication,
					photo: element2.photo,
				};
				union = { ...use, ...element };
				publicacionesUser.push(union);
			}
		})
	});
	return publicacionesUser;
}

module.exports = router;