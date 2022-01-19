"use strict";
const cordinatorLogic = require("../troop-manager/logics/troop-manager")();

const troopManagerController = () => {
	const getTypes = async (req, res) => {
		const result = await cordinatorLogic.getTypes();
		return res.send(result);
	};

	return {
		getTypes
	};
};

module.exports = troopManagerController;
