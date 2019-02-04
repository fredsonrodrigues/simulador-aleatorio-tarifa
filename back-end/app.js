var express = require("express");
var app = express();
var details = require("./routes/DetailsRoutes");

app.use("/details/", details);

app.get("/", function(req, res) {
  let hello = { message: "Hello World!" };
  res.json(hello);
});

app.listen(5000, function() {
  console.log("Example app listening on port 5000!");
});
