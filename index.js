/*const express = require("express");
const globalRouter = require("./routers/index");*/
import express from "express";
import globalRouter from "./routers/index.js";
const app = express();
const PORT = 8080;

app.use(express.json());

app.use(globalRouter);
//lowdb 선언

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err);
});
app.get("/", (req, res) => {
  res.send("Hello");
});
const handleListen = () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
