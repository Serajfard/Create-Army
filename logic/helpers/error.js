const CustomError = require("./custom-error");
const log = require("./log");

// eslint-disable-next-line no-unused-vars
module.exports = function (err, req, res, next) {
	if (err instanceof CustomError) {
		let status = err.errorNumber;
		let message = err.message;
		res.status(status).send(message);
	} else {
		log(err);
		res.status(500).send(err.message);
	}
};
