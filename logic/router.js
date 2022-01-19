const express = require("express");
const router = express.Router();

const router_logic = require("./modules/logic-manager/logic.router");

router.use("/logic", router_logic);

module.exports = router;
