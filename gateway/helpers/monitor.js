"use strict";
const packageinfo = require("../package.json");
const moment = require("moment");

const monitorController = () => {
	const echo = async (req, res) => {
		return res.send("ok");
	};

	const version = async (req, res) => {
		return res.send(packageinfo.version);
	};

	const getTime = async (req, res) => {
		return res.send(moment().toString());
	};
	return {
		echo,
		getTime,
		version
	};
};

module.exports = monitorController;
