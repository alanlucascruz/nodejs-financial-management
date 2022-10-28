const routes = require("express").Router();
const auth = require("../middlewares/AuthMiddleware");

routes.use("/auth", require("./AuthRoutes"));
routes.use("/category", auth, require("./CategoryRoutes"));
routes.use("/transaction", auth, require("./TransactionRoutes"));

module.exports = routes;
