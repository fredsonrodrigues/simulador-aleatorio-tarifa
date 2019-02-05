const mongoose = require("../config/Mongoplug");
var Schema = mongoose.Schema;

var plans = new Schema(
  {
    id: { type: String, required: true },
    plan: { type: String, required: true },
    minutes: { type: Number, required: true }
  },
  { collection: "plans" }
);

var Plans = mongoose.model("plans", plans);
module.exports = Plans;
