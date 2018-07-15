console.log("db.js is running...");


// Required npm modules
const mongoose = require("mongoose");

// Creating and connecting to database
const url = "mongodb://localhost:27017/dramatisPersonae";
mongoose.connect(url, { useNewUrlParser: true });


// Switches and connections
mongoose.connection.on("connected", () => {
	console.log("Mongoose is connected.");
});

mongoose.connection.on("error", (err) => {
	console.log(err, "Mongoose failed to connect.");
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose has been disconnected.");
});