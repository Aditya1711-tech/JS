const express = require("express");
const app = express();
const productRoute = require("./routes/user");
const PORT = 8000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.json({ msg: "1st rest created...." });
});

app.use(express.json());

app.use("/users", productRoute);

// Connect to DB
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
