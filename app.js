//package imports
const dotenv = require("dotenv");
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
dotenv.config();
const path = require("path");

app.use(express.static(path.join(__dirname, "/view")));
app.set("view engine", "hbs");
app.set("views", "./view");

//file imports
const PORT = process.env.PORT || 9000;
const URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
const middlewaresErr = require("./Error/middleware-error");
const connectDB = require("./database/connection");
const router = require("./Routes/route");

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route middlewares

//error middlewares
app.use(middlewaresErr);
app.use(router);
//server
const start = async () => {
  try {
    await connectDB(URL);
    app.listen(PORT, console.log(`connected to server ${PORT}....`));
  } catch (error) {
    console.log(error);
  }
};
start();
