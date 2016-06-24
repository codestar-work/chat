var express = require("express");
var app     = express();

app.engine("html", require("ejs").renderFile);
app.get("/", home);
app.listen(4000);

function home(req, res) {
	res.render("index.html");
}