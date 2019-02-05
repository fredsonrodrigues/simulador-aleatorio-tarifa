var express = require("express");
var router = express.Router();
var Details = require("../controllers/DetailsController");

router.get("/get-plans", Details.getPlans);
router.get("/get-codes", Details.getCodes);
router.get("/get-taxes-details/:plan/:source/:target/:minutes", Details.getTaxes);

module.exports = router;
