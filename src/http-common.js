import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

//const { NODE_ENV, BACKEND } = process.env;

var myBackend = process.env.BACKEND || "http://localhost:8080/api";
console.log("http-common backend: ", myBackend);

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
