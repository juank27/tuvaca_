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
	let files = req.files;
	for (let index = 0; index < files.length; index++) {
		const storageRef = ref(
			storage,
			'images/' + new Date().getTime() + files[index].originalname
		);
		const metadata = {
			contentType: files[index].mimetype,
		};
		uploadBytes(storageRef, req.files[index].buffer, metadata)
			.then((snapshot) => {
				console.log('Uploaded a blob or file!');
			})
			.catch((error) => {
				console.log(error);
				res.send('error');
			});
	}
		res.send('enviado');
});

module.exports = router;