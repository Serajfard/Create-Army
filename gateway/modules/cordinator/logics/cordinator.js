const CustomError = require("../../../helpers/custom-error");
const http = require("../../../helpers/http-helper")();
const config = require("config");

const cordinatorLogic = () => {
	const createArmy = async (totalNumberOfArmy) => {
		// throw new CustomError("CustomError!", 409);
		let logicManagerURL = `${config.get("services.logic")}/logic/army`;

		let troopManagerURL = `${config.get(
			"services.troop-manager"
		)}/troop-manager/types`;

		let troopTypes = await http.get(troopManagerURL);

		if (totalNumberOfArmy < troopTypes.length) {
			throw new CustomError(
				`Invalid input! minimum number of army is ${troopTypes.length}`,
				409
			);
		}

		let result = await http.post(logicManagerURL, {
			number: totalNumberOfArmy,
			types: troopTypes
		});

		return result;
	};

	return {
		createArmy
	};
};
module.exports = cordinatorLogic;
