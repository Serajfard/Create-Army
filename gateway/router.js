const express = require("express");
const router = express.Router();

const router_cordinator = require("./modules/cordinator/cordinator.router");
const monitor = require("./helpers/monitor_router");

router.use("/army", router_cordinator);
router.use("/health", monitor);

module.exports = router;
