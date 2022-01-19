const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const excpect = chai.expect;
const app = require("../app");
const log = require("../helpers/log");

describe("Get Types", function () {
	it("get troop types", function (done) {
		chai
			.request(app)
			.get("/troop-manager/types")
			.end(function (err, res) {
				if (err) {
					log(err);
				}
				excpect(res).to.have.status(200);
				excpect(res.body).to.be.an("array");
				done();
			});
	});
});
