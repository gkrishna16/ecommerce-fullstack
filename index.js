const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require(`cors`);
app.use(cors());
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require(`./routes/productRoute`);
const cartRoute = require(`./routes/cartRoute`);
const orderRoute = require(`./routes/orderRoute`);
const stripeRoute = require(`./routes/stripeRouter`);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`DB is connected`))
  .catch((error) => console.log(error))
  .finally(() => console.log(`DB is connected finally.`));

app.use(express.json());
app.use(`/api/auth`, authRoute);
app.use(`/api/users`, userRoute);
app.use(`/api/products`, productRoute);
app.use(`/api/carts`, cartRoute);
app.use(`/api/orders`, orderRoute);
app.use(`/api/checkout`, stripeRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log(`Server is running on ${process.env.PORT || 5001}.`);
});
