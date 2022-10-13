const routes = require("express").Router();

routes.use("/category", require("./CategoryRoutes"));

module.exports = routes;
