console.log("server.js is running...");


// Required npm modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Required database
require("./db/db");

// Required middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));


// Establishing required connection to controllers
const dramatisPersonaeController = require("./controllers/dramatisPersonaeControllers");
app.use("/dramatisPersonae/", dramatisPersonaeController);


// Listening for localhost
app.listen(3000, () => {
	console.log("server.js is listening on port 3000");
});