const mongoose = require("mongoose");

module.exports = mongoose.model("Vehicules", mongoose.Schema({
	id: String,
	type: String
}));