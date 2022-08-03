const { Router } = require('express');
const multer = require('multer')


const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/imga', (req, res) => {
	res.render('img', {layout: false});
});

router.post('/imagen', upload.array('imagen[]', 3),  function (req, res) {
	console.log(req.files);
	console.log('--------------');
	console.log(req.files[1]);
	res.send('enviado');
});

module.exports = router;