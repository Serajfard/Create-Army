const Joi = require("joi");

const validationModel = {
	createArmy: {
		body: {
			number: Joi.number().min(1).required().label("Number")
		}
	}
};

module.exports = validationModel;
