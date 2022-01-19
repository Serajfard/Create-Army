const cordinatorController = require("./cordinator.controller")();
const vmodel = require("./models/cordinator.validation.model");
const validator = require("../../helpers/validator")();
const router = require("express").Router();

/**
 * Create Army.
 * @group Army
 * @route POST /army
 * @param { create_army_input.model } body.body.required
 * @returns { JSON Object  } 200 - object
 * @produces application/json
 * @consumes application/json
 */
router.post(
	"/",
	// -----  a middleware can be used for authontication or API key checking
	validator.validate(vmodel.createArmy),
	cordinatorController.createArmy
);

module.exports = router;
