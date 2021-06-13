const express = require("express");
const router = express.Router();

const factoryRoutes = require("./factory");

router.use("/factory", factoryRoutes);

module.exports = router;