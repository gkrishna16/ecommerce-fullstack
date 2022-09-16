const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`DB is connected`))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5001, () => {
  console.log(`Server is running.`);
});
