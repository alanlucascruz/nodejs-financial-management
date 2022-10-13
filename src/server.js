const express = require("express");
const routes = require("express").Router();
const mongoose = require("mongoose");

const Test = require("./models/Test");

const app = express();
const port = process.env.PORT || 3000;

const connectDatabase = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  await mongoose.connect(
    `mongodb+srv://${user}:${password}@cluster0.1nrs2an.mongodb.net/?retryWrites=true&w=majority`
  );
};

const applyMiddlewares = () => {
  app.use(express.json());
  app.use("/", routes);
};

const startServer = () => {
  app.listen(port, () => {
    console.log("Servidor iniciado: http://localhost:3000/");
  });
};

(async () => {
  try {
    await connectDatabase();
    applyMiddlewares();

    routes.get("/test", async (req, res) => {
      const data = await Test.find({});

      res.json(data);
    });

    startServer();
  } catch (error) {
    console.log("Erro ao iniciar o servidor: ", error);
  }
})();
