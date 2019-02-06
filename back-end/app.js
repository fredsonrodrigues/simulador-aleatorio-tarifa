var express = require("express");
var app = express();
var cors = require('cors');
var details = require("./routes/DetailsRoutes");
app.use(cors());

app.use("/details/", details);

app.get("/", function(req, res) {
  let hello = { message: "Hello World!" };
  res.json(hello);
});

app.listen(80, function() {
  console.log("Example app listening on port 80!");
});
