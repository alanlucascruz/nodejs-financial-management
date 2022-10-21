const routes = require("express").Router();

routes.use("/auth", require("./AuthRoutes"));
routes.use("/category", require("./CategoryRoutes"));

module.exports = routes;
