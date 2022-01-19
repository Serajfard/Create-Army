module.exports = function (port) {
	return {
		swaggerDefinition: {
			info: {
				description: "Swagger Doc for the Gateway Application",
				title: "Gateway Application",
				version: require("../package.json").version
			},
			host: `localhost:${port}`,
			basePath: "/",
			produces: ["application/json"],
			schemes: ["http"]
		},
		basedir: __dirname,
		files: ["../modules/*/cordinator.router*.js"]
	};
};
