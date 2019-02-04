var mongoose = require("mongoose");
//require('dotenv').config();
mongoose.connect("mongodb://telzir:a12345@ds018308.mlab.com:18308/dbtelzir", {
  useNewUrlParser: true
});
module.exports = mongoose;
