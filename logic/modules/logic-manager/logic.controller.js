"use strict";
const logic = require("../logic-manager/logics/logic")();

const logicController = () => {
	const createArmy = async (req, res) => {
		let { number, types } = req.body;

		const result = await logic.createArmy(number, types);

		return res.send(result);
	};

	return {
		createArmy
	};
};

module.exports = logicController;
