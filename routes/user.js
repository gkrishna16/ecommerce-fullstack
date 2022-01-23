const router = require('express').Router();

router.get('/', (req, res) => {
	try {
		res.send('HOMEPAGE');
	} catch (error) {
		console.log(error);
	}
});

router.post('/userposttest', (req, res) => {
	const username = req.body.username;
	try {
		res.status(200).json({ name: username });
	} catch (error) {
		res.send(error);
	}
});
module.exports = router;
