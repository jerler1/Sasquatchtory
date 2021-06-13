const router = require("express").Router();
const factoryController = require("../controllers/factoryController");

// Route is /api/factory
router
    .route("/")
    .get(factoryController.findAll)
    .post(factoryController.create);

// Route is /api/factory/id
router
    .route("/:id")
    .get(factoryController.findById)
    .put(factoryController.update)
    .delete(factoryController.remove);

module.exports = router;
