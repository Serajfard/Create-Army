const Joi = require("joi");

const validationModel = {
	createArmy: {
		body: {
			number: Joi.number().min(1).required().label("Number"),
			types: Joi.array().items(
				Joi.object().keys({
					name: Joi.string().required(),
					data: Joi.object()
				})
			)
		}
	}
};

module.exports = validationModel;
