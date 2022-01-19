"use strict";
const cordinatorLogic = require("../cordinator/logics/cordinator")();

const cordinatorController = () => {
	const createArmy = async (req, res) => {
		let { number } = req.body;

		const result = await cordinatorLogic.createArmy(number);

		return res.send(result);
	};

	return {
		createArmy
	};
};

module.exports = cordinatorController;
