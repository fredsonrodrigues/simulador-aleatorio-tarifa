var mongoose = require("mongoose");
//require('dotenv').config();
mongoose.connect("mongodb://<user>:<pass>.mlab.com:18308/dbtelzir", {
  useNewUrlParser: true
});
module.exports = mongoose;
