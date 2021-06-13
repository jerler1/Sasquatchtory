const router = require("express").Router();
const profileController = require("../controllers/profileController");

// Route is /api/factory
router
    .route("/")
    .get(profileController.findAll)
    .post(profileController.create);

// Route is /api/factory/id
router
    .route("/:id")
    .get(profileController.findById)
    .put(profileController.update)
    .delete(profileController.remove);

module.exports = router;