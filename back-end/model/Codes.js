const mongoose = require("../config/Mongoplug");
var Schema = mongoose.Schema;

var codes = new Schema(
  {
    id: { type: String, required: true }
  },
  { collection: "plans" }
);

var Codes = mongoose.model("codes", codes);
module.exports = Codes;
