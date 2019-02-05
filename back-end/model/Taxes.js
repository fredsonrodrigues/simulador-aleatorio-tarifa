const mongoose = require("../config/Mongoplug");
var Schema = mongoose.Schema;
var Float = require('mongoose-float').loadType(mongoose);

var taxes = new Schema(
    {
        sourceCode: { type: String, required: true },
        targetCode: { type: String, required: true },
        priceMin: { type: Float }
    },
    { collection: "taxes" }
);

var Taxes = mongoose.model("taxes", taxes);
module.exports = Taxes;