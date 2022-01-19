const CustomError = require("../../../helpers/custom-error");

const troopManagerLogic = () => {
	const getTypes = async () => {
		let types = [];

		// check available types

		// we can manage types based on username and limit types
		// ex : user can use "Spearmen" so we push it to result array
		// this data comes from DB however to simplify the code, I used hardcode below

		types.push({
			name: "Spearmen",
			data: {
				power: 10
				// additional data
			}
		});

		types.push({
			name: "Swordsmen",
			data: {
				power: 12
				// additional data
			}
		});

		types.push({
			name: "Archers",
			data: {
				power: 15
				// additional data
			}
		});

		return types;
	};

	return {
		getTypes
	};
};
module.exports = troopManagerLogic;
