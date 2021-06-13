const express = require("express");
const router = express.Router();

const factoryRoutes = require("./factory");
const profileRoutes = require("./profile");

router.use("/factory", factoryRoutes);
router.use("/profile", profileRoutes);

module.exports = router;