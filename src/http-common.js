import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

//const { NODE_ENV, BACKEND } = process.env;

var myBackend = "http://localhost:8080/api";
var myEnv = process.env.NODE_ENV;
if (myEnv == "production")
  myBackend = "https://theot-backend.herokuapp.com/api";

console.log(
  "http-common backend: ",
  myBackend,
  " node-env: ",
  process.env.NODE_ENV
);

//const dotenv = require("dotenv");

export default axios.create({
  baseURL: myBackend,
  // baseURL: "https://theot-backend.herokuapp.com/api",
  // baseURL: "http://localhost:8080/api",
  //
  headers: {
    "Content-type": "application/json",
  },
});
