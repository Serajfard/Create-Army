const controller = require("./monitor")();

const router = require("express").Router();

router.get("/echo", controller.echo);
router.get("/gettime", controller.getTime);
router.get("/version", controller.version);
router.get("/", controller.echo);

module.exports = router;
