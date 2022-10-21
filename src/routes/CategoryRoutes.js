const routes = require("express").Router();
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/CategoryController");

routes.get("/:user_id", index);
routes.get("/find/:user_id/:filter", index);
routes.get(":id", show);
routes.post("/", store);
routes.put("/:id", update);
routes.delete("/:id", destroy);

module.exports = routes;
