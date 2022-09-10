const { Router } = require('express');
const multer = require('multer');
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
const { doc, deleteDoc, updateDoc, setDoc } = require('firebase/firestore'); //crud
const envioImg = require('../functions');

const router = Router();
var imagen = new envioImg();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });
let a;
let buscarGlobal = "";
let mensaje = undefined; //mensaje de error
let estado = false; //estado de la sesion
let modal = true;
var _idUser = ''; //id del usuario
globalThis.idUser = _idUser;
globalThis.photo = '';
globalThis.name = '';
//verificando estados de la sesion con las rutas
function verificarEstado(res, ruta, ruta2, datos = '', data = '', callback) {
	//console.log(mensaje);
	if (estado) {
		console.log('home raiz');
		// res.render('home');
		callback();
		if (modal) {
			console.log("$$$$$$$$$$$$$$$$$$");
			console.log(data);
			res.render(ruta, { datos, data });
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

// ------------------------------------ Rutas iniciales --------------------------------------------------//
// ruta principal de la pagina
router.get('/', async (req, res) => {
	publicaciones('publications')
		.then((publicaciones) => {
			Users()
				.then((users) => {
					let publicacion = unir(publicaciones, users);
					//res.send(a);
					let info = {
						name: globalThis.name,
						photo: globalThis.photo,
					}
					verificarEstado(res, 'publicaciones', 'index', publicacion, info, () => {
						//...
					});
				})
				.catch((error) => { console.log("No hay Usuarios", error); });
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});


console.log(estado)

// //logout
router.use('/logout', async (req, res, next) => {
	auth.signOut().then(() => {
		// Sign-out successful.
		estado = false;
		buscarGlobal = "";
		globalThis.idUser = '';
		console.log('logout');
		//next();
		res.redirect('/');
	}).catch((error) => {
		// An error happened.
	});
});

// -------------------------------------------- register ------------------------------------------ //
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

//------------------------------------------------- Logins ----------------------------------------------//
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
					globalThis.idUser = user.uid; //id user global
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
		//recuperar el id del usuario
		verific.forEach((doc) => {
			console.log("Lllllllllllllllllll");
			globalThis.photo = doc._fieldsProto.photo.stringValue;
			console.log(doc);
			globalThis.name = doc._fieldsProto.name.stringValue;
			globalThis.idUser = doc.id;
		});
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
		//recuperar el id del usuario
		verific.forEach((doc) => {
			globalThis.idUser = doc.id;
		});
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				res.redirect('/publicaciones');
			})
	}
});

//---------------------------------------------- other actions --------------------------------------------//
router.get('/iniciosesion', async (req, res) => {
	//res.render('InicioSesion');
	verificarEstado(res, 'publicaciones', 'InicioSesion', datos = '', data = '', () => {
		//...
	});
});

// formulario de registro y solicitudes en la pagina de inicio
router.get('/registro', async (req, res) => {
	verificarEstado(res, 'publicaciones', 'registro', datos = '', data = '', () => {
		//...
	});
});

//ruta inicial para renderizar publicaciones
router.get('/publicacioness', async (req, res) => {
	publicaciones()
		.then((publicaciones) => {
			verificarEstado(res, 'publicaciones', 'index', publicaciones, data = '', () => {
				//...
			});
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});
router.get('/crearPublicacion', async (req, res) => {
	//res.render('crearPublicacion');
	verificarEstado(res, 'crearPublicacion', 'index', datos = '', globalThis.photo, () => {
		//...
	});
});
router.get('/editarPublicacion', async (req, res) => {
	//res.render('crearPublicacion');
	verificarEstado(res, 'editarPublicaciones', 'index', datos = '', globalThis.photo, () => {
		//...
	});
});
router.get('/crearAcarreo', async (req, res) => {
	//res.render('crearPublicacion');
	verificarEstado(res, 'crearAcarreo', 'index', datos = '', globalThis.photo, () => {
		//...
	});
});

// rufa de los acarreos
router.get('/acarreos', async (req, res) => {
	publicaciones('acarreos')
		.then((publicaciones) => {
			Users()
				.then((users) => {
					let publicacion = unir(publicaciones, users);
					//res.send(a);
					setTimeout(() => {
						let info = {
							photo: globalThis.photo,
							name: globalThis.name,
						}
						verificarEstado(res, 'acarreos', 'index', publicacion, info, () => {
							//...
						});
					}, 500);
				})
				.catch((error) => { console.log("No hay Usuarios", error); });
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
	// verificarEstado(res, 'acarreos', 'index', datos = '', () => {
	// 	//...
	// });
});
router.get('/seleccionacarreos', async (req, res) => {
	//res.render('acarreos');
	verificarEstado(res, 'seleccionA', 'index', datos = '', data = '', () => {
		//...
	});
});
router.get('/perfilUsuarios', async (req, res) => {
	//res.render('acarreos');
	verificarEstado(res, 'perfilUsuarios', 'index', datos = '', () => {
		//...
	});
});
router.get('/perfilAcarreos', async (req, res) => {
	//res.render('acarreos');
	verificarEstado(res, 'perfilAcarreos', 'index', datos = '', () => {
		//...
	});
});
router.post('/perfilU', async (req, res) => {
	let { id_p } = req.body;
	console.log(id_p);
	console.log('abri publicaciones');
	publicaciones('publications')
		.then((publicaciones) => {
			let idusuariover;
			publicaciones.forEach((doc) => {
				console.log(doc);
				if (doc.id === id_p) {
					console.log("entre al ifffff");
					console.log(doc.iduser);
					idusuariover = doc.iduser;
				}
			});
			console.log('1111111111111111111111111111111111111111');
			console.log(idusuariover);
			data_perfil(idusuariover)
				.then((data) => {
					publicaciones_propias("publications", idusuariover)
						.then((result) => {
							//console.log("---------------------------------");
							// //result.push(data)
							// console.log(result);
							let unir_publicaciones = unir(result, data);
							//console.log(unir_publicaciones);
							data[0]['photoprincipal'] = globalThis.photo;
							data[0]['name_us'] = globalThis.name;
							console.log("#####################################");
							console.log(data);

							verificarEstado(res, 'perfilUsuarios', 'index', unir_publicaciones, data[0], () => {
								console.log('Estoy dentro del perfil con un callback');
							});
						}).catch((error) => {
							console.log(error);
						});
				})
				.catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
	// let { id_p } = req.body;
	// console.log(id_p);
	// res.render('perfilUsuarios')
});
router.post('/perfilA', async (req, res) => {
	let { id_p } = req.body;
	console.log(id_p);
	console.log('abri publicaciones');
	publicaciones('acarreos')
		.then((publicaciones) => {
			let idusuariover;
			publicaciones.forEach((doc) => {
				console.log(doc);
				if (doc.id === id_p) {
					console.log("entre al ifffff");
					console.log(doc.iduser);
					idusuariover = doc.iduser;
				}
			});
			console.log('1111111111111111111111111111111111111111');
			console.log(idusuariover);
			data_perfil(idusuariover)
				.then((data) => {
					publicaciones_propias("acarreos", idusuariover)
						.then((result) => {
							//console.log("---------------------------------");
							// //result.push(data)
							// console.log(result);
							console.log("&&&&&&&&&&&&&&&&&&&&&&&&&");
							console.log(result);
							let unir_publicaciones = unir(result, data);
							console.log(unir_publicaciones);
							data[0]['photoprincipal'] = globalThis.photo;
							data[0]['name_us'] = globalThis.name;
							verificarEstado(res, 'perfilAcarreos', 'index', unir_publicaciones, data[0], () => {
								console.log('Estoy dentro del perfil con un callback');
							});
						}).catch((error) => {
							console.log(error);
						});
				})
				.catch((error) => {
					console.log(error);
				});
		})
	// let { id_p } = req.body;
	// console.log(id_p);
	// res.render('perfilAcarreos')
});

router.post('/visualizarPublicacion', async (req, res) => {
	let { id_p } = req.body;
	publicaciones('publications')
		.then((publicaciones) => {
			let idusuarioverr = [];
			publicaciones.forEach((doc) => {
				if (doc.id === id_p) {
					idusuarioverr.push(doc);
				}
			})
			console.log("llllllllllllllllllll");
			console.log(idusuarioverr[0].edad);
			verificarEstado(res, 'editarPublicaciones', 'index', idusuarioverr[0], globalThis.photo, () => {
				console.log('Estoy dentro del perfil con un callback');
			});
		})
		.catch((error) => {
			console.log("No hay publicaiones", error)
		});
});

router.get('/misacarreos', async (req, res) => {
	let id = globalThis.idUser;
	data_perfil(id)
		.then((data) => {
			publicaciones_propias("acarreos", id)
				.then((result) => {
					console.log("---------------------------------");
					// //result.push(data)
					// console.log(result);
					let unir_publicaciones = unir(result, data);
					console.log(unir_publicaciones);
					verificarEstado(res, 'misAcarreos', 'index', unir_publicaciones, data[0], () => {
						console.log('Estoy dentro del perfil con un callback');
					});
				}).catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			console.log(error);
		});
	//res.render('acarreos');
	// verificarEstado(res, 'misAcarreos', 'index', datos = '', data = '', () => {
	// 	//...
	// });
});
router.get('/buscarPublicaciones', async (req, res) => {
	modal = false;
	verificarEstado(res, 'buscarPublicaciones', 'index', datos = '', data = '', () => {
		//...
	});
});
router.get('/buscarAcarreos', async (req, res) => {
	modal = false;
	verificarEstado(res, 'buscarAcarreos', 'index', datos = '', data = '', () => {
		//...
	});
});

// ruta del perfil
router.get('/perfil', async (req, res) => {
	//res.render('perfil');
	//verificarEstado (res, 'perfil', 'index');
	let id = globalThis.idUser;
	data_perfil(id)
		.then((data) => {
			publicaciones_propias("publications", id)
				.then((result) => {
					console.log("---------------------------------");
					// //result.push(data)
					// console.log(result);
					let unir_publicaciones = unir(result, data);
					console.log(unir_publicaciones);
					verificarEstado(res, 'perfil', 'index', unir_publicaciones, data[0], () => {
						console.log('Estoy dentro del perfil con un callback');
					});
				}).catch((error) => {
					console.log(error);
				});
		})
		.catch((error) => {
			console.log(error);
		});
});

//actualizar perfil
router.post('/update_data_personal', async (req, res) => {
	let { name, phone, ubication } = req.body;
	data = {
		name,
		phone,
		ubication,
	}
	console.log(data);
	update_data("users", globalThis.idUser, data)
		.then((result) => {
			res.redirect('/perfil');
		})
		.catch((error) => {
			console.log(error);
		});
});

//actualizar estado de publicacion
router.post('/estadoPublicacion', async (req, res) => {
	let { id_p } = req.body;
	let data = imagen.getDate();
	data = {
		updatedAt: data,
	}
	console.log(data);
	console.log(id_p);
	update_data("publications", id_p, data)
		.then((result) => {
			res.redirect('/perfil');
		})
		.catch((error) => {
			console.log(error);
		});
});

//actualizar imagen de perfil
router.post('/actualizar_img', upload.single('perfil'), async (req, res) => {
	let img = req.file;
	imagen.sendImagesPerfil(img, globalThis.idUser, update_data);
	res.redirect('/perfil');
});

//eliminar publicacion
router.post('/eliminarPublicacion', async (req, res) => {
	let { id_p } = req.body;
	console.log(id_p);
	db.collection("publications").doc(id_p).delete().then(() => {
		console.log("Document successfully deleted!");
	}).catch((error) => {
		console.error("Error removing document: ", error);
	});
	//await deleteDoc(doc(db, "publications", id_p));
	res.redirect('/perfil');
});

//elimiinar acarreo
router.post('/eliminarA', async (req, res) => {
	let { id_p } = req.body;
	console.log(id_p);
	db.collection("acarreos").doc(id_p).delete().then(() => {
		console.log("Document successfully deleted!");
	}).catch((error) => {
		console.error("Error removing document: ", error);
	});
	//await deleteDoc(doc(db, "publications", id_p));
	res.redirect('/misacarreos');
});

//unir publicacion con usuario y mostrarlas publicaciones pgina de inicio
router.get('/publicaciones', async (req, res) => {
	modal = true;
	publicaciones('publications')
		.then((publicaciones) => {
			Users()
				.then((users) => {
					let publicacion = unir(publicaciones, users);
					//res.send(a);
					setTimeout(() => {
						let info = {
							photo: globalThis.photo,
							name: globalThis.name,
						}
						console.log("el nomnbre es: ", info.name);
						verificarEstado(res, 'publicaciones', 'index', publicacion, info, () => {
							//...
						});
					}, 500);
				})
				.catch((error) => { console.log("No hay Usuarios", error); });
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});

//abrir publicaciones detalladas en otra ventana
router.post('/abrir-publicaciones', async (req, res) => {
	let { id_p } = req.body;
	console.log(id_p);
	console.log('abri publicaciones');
	publicaciones('publications')
		.then((publicaciones) => {
			Users()
				.then((users) => {
					let publicacion = unir(publicaciones, users);
					let buscar = publicacion.find(function (element) {
						return element.id == id_p;
					});
					buscarGlobal = buscar;
					buscarGlobal['name_User'] = globalThis.name;
					console.log(buscar);
				})
				.catch((error) => { console.log("No hay Usuarios", error); });
		})
		.catch((error) => { console.log("No hay publicaiones", error); });
});
router.get('/modalpublicaciones', async (req, res) => {
	modal = false;
	console.log(buscarGlobal);
	let info = {
		photo: globalThis.photo,
		name: globalThis.name,
	}
	console.log(info);
	verificarEstado(res, 'modalPublicaciones', 'index', buscarGlobal, info, () => {
		//...
	});
});

//Busqueda bovinos
router.post('/busquedaBovina', async (req, res) => {
	let { razas, categorias, edad_, ubication, precios } = req.body;
});

//busquda de usuarios
router.post('/buscando', async (req, res) => {
	let { usuario } = req.body;
	usuario = usuario.toLowerCase();
	Users()
		.then((users) => {
			let busqueda = filtrar(users, usuario);
			b = busqueda;
			console.log("----------------------------------------------");
			console.log(b);
			console.log("esta es la busqueda de data");
			console.log(busqueda.length);
			//console.log(busqueda.length(), "longitudddd");
			//publicaciones_propias('publications', id)
			let dataEncontrada = [];
			for (let index = 0; index < busqueda.length; index++) {
				publicaciones_propias('publications', busqueda[index].id)
					.then((publicaciones) => {
						let u = unir(publicaciones, users);
						dataEncontrada.push(u);
					})
			}
			setTimeout(() => {
				let info = dataNull(dataEncontrada);
				let org = organizares(info);
				//res.render('buscarPublicaciones', { layout: false, dataEncontrada: org });
				let infoPerfil = {
					photo: globalThis.photo,
					name: globalThis.name,
				}
				verificarEstado(res, 'buscarPublicaciones', 'index', org, infoPerfil, () => {
					//...
				});
			}, 2000);
		})
		.catch((error) => {
			console.log("No hay Usuarios", error);
		});
});
//organizar datos
function organizares(data) {
	let dataOrganizada = [];
	for (let index = 0; index < data.length; index++) {
		for (let i = 0; i < data[index].length; i++) {
			dataOrganizada.push(data[index][i]);
		}
	}
	return dataOrganizada;
}

//validar datos no encontrados
function dataNull(data) {
	let info = []
	for (let index = 0; index < data.length; index++) {
		if (data[index].length !== 0) {
			info.push(data[index]);
		}
	}
	return info;
}
//filtrar las busquedas
function filtrar(info, busqueda) {
	let encontro = [];
	info.forEach((dataUser) => {
		if (((dataUser.name).toLowerCase()).includes(busqueda)) {
			encontro.push(dataUser);
		}
	})
	return encontro;
}

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
		console.log(userRegister);
		return userRegister;
		//res.send(userRegister[0].email);
	} else {
		console.log('No hay usuarios');
		//res.send('no existen publicaciones');
		return 'No hay usuarios';
	}
}
//traer publicaciones
async function publicaciones(dataBase) {
	console.log('imprimiendo contenido');
	console.log(dataBase);
	console.log(typeof (dataBase));//-> salida: string
	let publications = db.collection(dataBase);
	//consulta con la condicion
	let querySnapshot = await publications.orderBy("updatedAt", "desc").get();
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
//traer publicaciones propias
async function publicaciones_propias(dataBase, idUser) {
	console.log('imprimiendo contenido');
	console.log(dataBase);
	console.log(typeof (dataBase));//-> salida: string
	let publications = db.collection(dataBase);
	//consulta con la condicion
	let querySnapshot = await publications.orderBy("updatedAt", "desc").get();
	//console.log('imprimiendo contenido');
	//obtener los datos de la consulta en un nuevo objeto
	let userRegister = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	//console.log(typeof (userRegister));//-> salida: object
	//console.log(userRegister);//-> Estructura de datos
	let data_publications = [];
	let aux = 0;
	userRegister.forEach(element => {
		if (element.iduser === idUser) {
			data_publications.push(element);
		}
		aux++;
	});
	return data_publications;
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
	//console.log("**********************************");
	//console.log(publicacionesUser);
	return publicacionesUser;
}
// --------------- Probando la seccion traer datos del perfil ----------------------
//traer todos los usuarios
async function data_perfil(idUser) {
	let users = db.collection('users');
	//consulta con la condicion
	let querySnapshot = await users.get();
	//console.log('imprimiendo contenido');
	//obtener los datos de la consulta en un nuevo objeto
	let userRegister = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	//console.log(typeof (userRegister));//-> salida: object
	//console.log(userRegister);//-> Estructura de datos
	let element_perfil = [];
	userRegister.forEach(element => {
		if (element.id == idUser) {
			console.log('entre en el for each');
			//console.log(element);
			element_perfil.push(element);
		}
	});
	//console.log("**********************************");
	//console.log(element_perfil);
	return element_perfil;
}

//actualizar datos de una coleccion
async function update_data(bdatos, id, dataUpdate) {
	const data = db.collection(bdatos).doc(id);
	await data.update(dataUpdate);
}
//------------------------------Esto es una prueba -------------------------------------------------------
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
//subida de imagenes
router.get('/img', async (req, res) => {
	let id = globalThis.idUser;
	console.log("Este es el ID ");
	console.log(id);
	data_perfil(id)
		.then(result => {
			console.log('Este es el resultado');
			console.log(result);
		}
		)
		.catch((error) => {
			console.log("No se encontro info ", error);
		})
	res.render('imagenes', { layout: false });
});
const { ref, uploadString } = require('firebase/storage');
//subir imagnes	a la base de datos
router.post('/storage', async (req, res) => {
	let { file } = req.body;
	console.log(file);
	console.log(typeof (file));
	let img = ref(storage, `${file}`);
	await uploadString(img, 'imagenes/file.png')
		.then((snapshot) => {
			console.log(snapshot);
			res.send('subido');
		});
});

router.get('/storage', async (req, res) => {
	res.render('error', { layout: false });
});


module.exports = router;
