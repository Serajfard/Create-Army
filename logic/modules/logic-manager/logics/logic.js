const CustomError = require("../../../helpers/custom-error");

const logic = () => {
	const createArmy = async (numberOfArmy, types) => {
		if (numberOfArmy < types.length) {
			throw new CustomError("number of army is incorrect", 400);
		}

		let resultArray = [];

		// minimum number of each troop is 1 so I will assign 1 to all types first.
		types.forEach((troopType) => {
			resultArray.push({
				number: 1,
				type: troopType
			});
		});

		// restOfArmy = numberOfArmy - (all 1s we assigned to each troops = types.length)
		// I will generate random bound numbers to assign the rest of soldiers to troops
		let restOfArmy = numberOfArmy - types.length;

		if (restOfArmy === 0) {
			return resultArray;
		}

		let upperBound = restOfArmy;

		let boundArray = [upperBound];

		for (let i = 1; i < types.length; ++i) {
			boundArray.push(getRandom(upperBound));
		}
		boundArray.sort(function (a, b) {
			return a - b;
		});

		let lowerBound = 0;
		let index = 0;
		boundArray.forEach((bound) => {
			resultArray[index].number += bound - lowerBound;
			index++;
			lowerBound = bound;
		});

		return resultArray;
	};

	const getRandom = (upperRange) => {
		// Returns a random integer from 0 to 9: Math.floor(Math.random() * 10);
		// +1 to change the result from 0 to 10 (include upperRange)

		let random = Math.floor(Math.random() * (upperRange + 1));
		return random;
	};

	return {
		createArmy
	};
};
module.exports = logic;
