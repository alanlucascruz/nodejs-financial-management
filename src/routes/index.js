const routes = require("express").Router();
const auth = require("../middlewares/AuthMiddleware");

routes.use("/auth", require("./AuthRoutes"));
routes.use("/category", auth, require("./CategoryRoutes"));

module.exports = routes;
