const app = require("./app");
const config = require("config");
const log = require("./helpers/log");

app.listen(config.get("app.port"), function () {
	log(`Troop Manager listening on port ${config.get("app.port")} !`);
});
