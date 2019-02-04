var express = require("express");
var router = express.Router();
var Details = require("../controllers/DetailsController");

router.get("/get-plans", Details.getPlans);
router.get("/get-codes", Details.getCodes);

module.exports = router;
