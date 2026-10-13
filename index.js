// const {
//     sum :jodo,
//     subtract :minus,
//     multiply,

// } = require ("./airthmaticops.js");

// console.log(jodo(1,2));
// console.log(minus(1,2));
// console.log(multiply(1,2));

import { sum as jodo, subtract as minus, multiply } from "./airthmaticops.js";

console.log(jodo(1, 2));
console.log(minus(1, 2));
console.log(multiply(1, 2));

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
