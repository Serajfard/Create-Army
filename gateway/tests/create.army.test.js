const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const excpect = chai.expect;
const app = require("../app");
const log = require("../helpers/log");

describe("Create Army", function () {
	it("Positive - create army - check function calls", function (done) {
		let inputData = { number: 10 };

		chai
			.request(app)
			.post("/army")
			.send(inputData)
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
				excpect(total).to.equal(inputData.number);
				done();
			});
	});

	it("Negative - create army with incorrect number of army", function (done) {
		let inputData = { number: 0 };
		chai
			.request(app)
			.post("/army")
			.send(inputData)
			.end(function (err, res) {
				if (err) {
					log(err);
				}
				excpect(res).to.have.status(400);
				done();
			});
	});
});
