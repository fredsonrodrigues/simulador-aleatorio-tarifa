const mongoose = require("../config/Mongoplug");
var Schema = mongoose.Schema;

var plans = new Schema(
  {
    id: { type: String, required: true },
    plan: { type: String, required: true }
  },
  { collection: "plans" }
);

var Plans = mongoose.model("plans", plans);
module.exports = Plans;
