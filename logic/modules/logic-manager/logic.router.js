const logicController = require("./logic.controller")();
const vmodel = require("./models/logic.validation.model");
const validator = require("../../helpers/validator")();
const router = require("express").Router();

router.post(
	"/army",
	validator.validate(vmodel.createArmy),
	logicController.createArmy
);

module.exports = router;
