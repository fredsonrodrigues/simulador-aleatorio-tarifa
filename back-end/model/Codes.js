const mongoose = require("../config/Mongoplug");
var Schema = mongoose.Schema;

var codes = new Schema(
  {
    id: { type: String, required: true }
  },
  { collection: "codes" }
);

var Codes = mongoose.model("codes", codes);
module.exports = Codes;
