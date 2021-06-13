const router = require("express").Router();
const factoryController = require("../controllers/factoryController");

router
    .route("/")
    .get(factoryController.findAll)
    .post(factoryController.create);


