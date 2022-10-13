const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

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
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log("Servidor iniciado: http://localhost:3000/");
  });
};

(async () => {
  try {
    await connectDatabase();
    applyMiddlewares();
    startServer();
  } catch (error) {
    console.log("Erro ao iniciar o servidor: ", error);
  }
})();
