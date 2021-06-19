var express = require("express");
var router = express.Router();
const health_utils = require("./health_utils");


router.get("/", async (req, res, next) => {
  try {
    const health_details = health_utils.getHealthDetails();
    res.json(health_details);
  } catch (error) {
    next(error);
  }
});

module.exports = router;