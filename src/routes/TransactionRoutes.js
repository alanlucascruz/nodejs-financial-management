const routes = require("express").Router();
const {
  index,
  show,
  findByDate,
  store,
  update,
  destroy,
} = require("../controllers/TransactionController");

routes.get("/:user_id", index);
routes.get("/show/:id", show);
routes.get("/:user_id/find_by_date/:initial_date/:final_date", findByDate);
routes.post("/", store);
routes.put("/:id", update);
routes.delete("/:id", destroy);

module.exports = routes;
