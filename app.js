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
const api = require("./Routes/api");

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cookieParser = require('cookie-parser');


//route middlewares

//error middlewares
app.use(middlewaresErr);
app.use(cookieParser());
app.use(router);
app.use("/api", api);

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
