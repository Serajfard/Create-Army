const app = require("./app");
const config = require("config");
const swagger = require("./helpers/swagger-doc");
const expressSwagger = require("express-swagger-generator")(app);
const log = require("./helpers/log");
const env = process.env.NODE_ENV || "development";

app.listen(config.get("app.port"), function () {
	log(`Gateway API listening on port ${config.get("app.port")} !`);
});

if (env === "debug") expressSwagger(swagger(config.get("app.port")));
