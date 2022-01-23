const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

mongoose
	.connect(
		'mongodb+srv://gks1234:Gks1234@ecommerceapi.sgpqd.mongodb.net/shop?retryWrites=true&w=majority',
	)
	.then(() => console.log(`DB is connected`))
	.catch((error) => console.log(error));

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(5001, () => {
	console.log(`Server is running.`);
});
