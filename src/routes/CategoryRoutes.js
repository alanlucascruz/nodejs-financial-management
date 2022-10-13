const routes = require("express").Router();

routes.get("/", () => {});
routes.get(":id", () => {});
routes.post("/", () => {});
routes.put("/:id", () => {});
routes.delete("/:id", () => {});

module.exports = routes;
