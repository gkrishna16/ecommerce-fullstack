const router = require('express').Router();
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		const savedUser = await newUser.save();
		res.status(200).json(savedUser);
		console.log(savedUser);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
