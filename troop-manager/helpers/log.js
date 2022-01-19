const debug = require("debug")("app:debug");

const log = (...args) => {
	debug(...args);
};

module.exports = log;
