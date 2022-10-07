const express = require("express");
const globalRouter = require("./routers/index");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(globalRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err);
});

const handleListen = () => {
  console.log(`Server listening at: http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
