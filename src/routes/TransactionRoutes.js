const routes = require("express").Router();
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/TransactionController");

routes.get("/:user_id", index);
routes.get("/find/:user_id/:filter", index);
routes.get("/show/:id", show);
routes.post("/", store);
routes.put("/", update);
routes.delete("/", destroy);

module.exports = routes;
