const express = require("express");
const router = express.Router();

const router_troop_manager = require("./modules/troop-manager/troop-manager.router");

router.use("/troop-manager", router_troop_manager);

module.exports = router;
