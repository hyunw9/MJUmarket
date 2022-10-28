/*const express = require("express");
const globalRouter = require("./routers/index");*/
import express from "express";
import globalRouter from "./routers/index.js";
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "ec2-3-38-210-186.ap-northeast-2.compute.amazonaws.com",
    ],
  })
);
app.use(globalRouter);
//lowdb 선언

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err);
});

app.get("/test", (req, res) => {
  res.json("ok");
});
const handleListen = () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
