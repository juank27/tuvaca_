const { Router } = require('express');
const multer = require('multer')
const { storage } = require('../firebaseCloud');//importar la base de datos

const router = Router();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });

//ruta del render para la prueba con imagenes
router.get('/imgaa', (req, res) => {
	console.log('------------------------------------');
	//console.log(id.getUser());
	//console.log(globalThis.idUser);
	res.render('img', { layout: false });
});

module.exports = router;