const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const ringRouter = require("./routes/ring.route");
const braceletRouter = require("./routes/bracelet.route");
const earringRouter = require("./routes/earring.route");
const mangalsutraRouter = require("./routes/mangalsutra.route");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter)
app.use("/ring", ringRouter)
app.use("/bracelet", braceletRouter)
app.use("/earring", earringRouter)
app.use("/mangalsutra", mangalsutraRouter)

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Mongo Atlas");
  } catch (err) {
    console.log(err)
    console.log("Couldn't connect to Mongo Atlas");
  }
  console.log(`Server started on port ${process.env.port}`);
});
