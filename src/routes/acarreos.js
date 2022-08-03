const { Router } = require('express');
const multer = require('multer')
const { storage } = require('../firebaseCloud');//importar la base de datos
const { getStorage, ref, uploadBytes } = require ("firebase/storage");




const router = Router();
//const storageCloud = getStorage();
const storageLocal = multer.memoryStorage();
const upload = multer({ storage: storageLocal });


router.get('/imga', (req, res) => {
	res.render('img', {layout: false});
});

router.post('/imagen', upload.array('imagen[]', 3),  async (req, res) =>{
	console.log(req.files);
	console.log('--------------');
	console.log(typeof(req.files[0]));
	let files = req.files;
	const storageRef = ref(storage, 'images/'+files[0].originalname);
	console.log('holaaa');
	console.log(storageRef);
	uploadBytes(storageRef, req.files[0].buffer)
		.then((snapshot) => {
			console.log('Uploaded a blob or file!');
			res.send('enviado');
		})
		.catch((error) => {
			console.log(error);
			res.send('error');
		});
});

module.exports = router;