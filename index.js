const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require(`./routes/productRoute`);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`DB is connected`))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(`/api/auth`, authRoute);
app.use(`/api/users`, userRoute);
app.use(`/api/products/`, productRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log(`Server is running on ${process.env.PORT || 5001}.`);
});
