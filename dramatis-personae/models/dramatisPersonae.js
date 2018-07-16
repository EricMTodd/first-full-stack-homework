console.log("dramatisPersonae.js is running...");


// Required npm modules
const mongoose = require("mongoose");

// Creating new schema
const dramatisPersonaeSchema = new mongoose.Schema({
	name: String,
	age: String,
	gender: String,
	race: String,
	class: String,
});


module.exports = mongoose.model("DramatisPersonae", dramatisPersonaeSchema);