const router = require("express").Router();
const factoryController = require("../controllers/factoryController");

router
    .route("/")
    .get(factoryController.findAll)
    .post(factoryController.create);

router
    .route("/:id")
    .get(factoryController.findById)
    .put(factoryController.update)
    .delete(factoryController.remove);

module.exports = router;
