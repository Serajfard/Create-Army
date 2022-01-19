const Joi = require("joi");
const CustomError = require("./custom-error");

const Validator = () => {
	const validate = (model) => {
		return function (req, res, next) {
			for (let item in model) {
				const schema = Joi.object(model[item]);
				const { error } = schema.validate(req[item]);
				if (error) {
					throw new CustomError(error.message, 400);
				}
			}
			return next();
		};
	};

	return {
		validate
	};
};

module.exports = Validator;
