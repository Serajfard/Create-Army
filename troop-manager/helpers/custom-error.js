class CustomError extends Error {
	constructor(message, errorNumber) {
		super(message);
		this.name = this.constructor.name;
		this.errorNumber = errorNumber;
	}
}

module.exports = CustomError;
