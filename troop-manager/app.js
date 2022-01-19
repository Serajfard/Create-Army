const express = require("express");
const app = express();
require("express-async-errors");
const errors = require("./helpers/error");
const cors = require("cors");
const router = require("./router");
const log = require("./helpers/log");

process
	.on("unhandledRejection", (reason, p) => {
		log(reason, "Unhandled Rejection at Promise", p);
	})
	.on("uncaughtException", (err) => {
		log(err, "Uncaught Exception thrown");
		process.exit(1);
	});

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use(errors);

module.exports = app;
