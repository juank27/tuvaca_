const { Router } = require('express');

const router = Router();

router.get('/hello', (req, res) => {
	res.send('Hello World');
});
module.exports = router;