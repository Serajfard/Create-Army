const troopManagerController = require("./troop-manager.controller")();
// const vmodel = require("./models/cordinator.validation.model");
// const validator = require("../../helpers/validator")();
const router = require("express").Router();

/**
 * Get Types.
 * @group Troop
 * @route GET /types
 * @returns { JSON Object  } 200 - object
 * @produces application/json
 * @consumes application/json
 */
router.get("/types", troopManagerController.getTypes);

module.exports = router;
