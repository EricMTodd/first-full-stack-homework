console.log("dramatisPersonaeControllers.js is running...");


// Required npm modules
const express = require("express");
const router = express.Router();
const DramatisPersonae = require("../models/dramatisPersonae");


// Index Route
router.get("/", (req, res) => {
	DramatisPersonae.find({}, (err, allDramatisPersonae) => {
		if (err) {
			res.render(err, "Failed to show index.ejs.")
		} else {
			res.render("index.ejs", {
				"dramatisPersonaeList": allDramatisPersonae
			});
		}
	});
});


// New Route
router.get("/new", (req, res) => {
	res.render("new.ejs");
});

// This is the route that the new form will be sending it's data to.
router.post("/", (req, res) => {
	DramatisPersonae.create(req.body, (err, createdDramatisPersonae) => {
		if (err) {
			console.log(err, "Failed to post new dramatisPersonae");
		} else {
			console.log(createdDramatisPersonae);
			res.redirect("/dramatisPersonae/");
		}
	});
});


// Show Route
router.get("/:id", (req, res) => {
	DramatisPersonae.findById(req.params.id, (err, foundDramatisPersonae) => {
		if (err) {
			console.log(err, "Failed to display index.ejs.");
		} else {
			res.render("show.ejs", {
		 	"dramatisPersonae": foundDramatisPersonae
			})
		}
	});
});


// Delete Route
router.delete("/:id", (req, res) => {
	DramatisPersonae.findByIdAndRemove(req.params.id, (err, deletedDramatisPeronae) => {
		if (err) {
			console.log(err, "Failed to delete dramatisPersonae.");
		} else {
			res.redirect("/dramatisPersonae/");
		}
	});
});


// Edit Route
router.get("/:id/edit", (req, res) => {
	DramatisPersonae.findById(req.params.id, (err, foundDramatisPersonae) => {
		res.render("edit.ejs", {
		 	"dramatisPersonae": foundDramatisPersonae
		})
	});
});

router.put("/:id", (req, res) => {
	DramatisPersonae.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedDramatisPersonae) => {
		if (err) {
			console.log(err, "Failed to updtate model.");
		} else {
			console.log(updatedDramatisPersonae, "Model successfully updated.");
			res.redirect("/dramatisPersonae/");
		}
	});
});


module.exports = router;