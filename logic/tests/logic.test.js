const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const excpect = chai.expect;
const app = require("../app");
const log = require("../helpers/log");

describe("Create army", function () {
	it("Positive - create army for three sample types", function (done) {
		let types = [
			{ name: "Spearmen", data: {} },
			{ name: "Swordsmen", data: {} },
			{ name: "Archers", data: {} }
		];

		let inputObj = { number: 100, types };

		chai
			.request(app)
			.post("/logic/army")
			.send(inputObj)
			.end(function (err, res) {
				if (err) {
					log(err);
				}
				excpect(res).to.have.status(200);
				excpect(res.body).to.be.an("array");
				let result = res.body;
				let total = 0;
				result.forEach((item) => {
					excpect(item).to.have.property("number");
					total += item.number;
				});
				excpect(total).to.equal(inputObj.number);
				done();
			});
	});

	it("Positive - create army for three sample types and same population", function (done) {
		let types = [
			{ name: "Spearmen", data: {} },
			{ name: "Swordsmen", data: {} },
			{ name: "Archers", data: {} }
		];

		let inputObj = { number: 3, types };

		chai
			.request(app)
			.post("/logic/army")
			.send(inputObj)
			.end(function (err, res) {
				if (err) {
					log(err);
				}
				excpect(res).to.have.status(200);
				excpect(res.body).to.be.an("array");
				let result = res.body;
				let total = 0;
				result.forEach((item) => {
					excpect(item).to.have.property("number", 1);
					total += item.number;
				});
				excpect(total).to.equal(inputObj.number);
				done();
			});
	});

	it("Negative - create army with incorrect number of army", function (done) {
		let types = [
			{ name: "Spearmen", data: {} },
			{ name: "Swordsmen", data: {} },
			{ name: "Archers", data: {} }
		];

		let inputObj = { number: 2, types };

		chai
			.request(app)
			.post("/logic/army")
			.send(inputObj)
			.end(function (err, res) {
				if (err) {
					log(err);
				}
				excpect(res).to.have.status(400);
				done();
			});
	});
});
