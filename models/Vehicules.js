const mongoose = require("mongoose");

module.exports = mongoose.model("Vehicules", new mongoose.Schema({
	immatriculation: {
		type: String,
		uppercase: true,
		index: true,
		required: true
	},
	vin: {
		type: String,
		uppercase: true,
		required: true
	},
	model: {
		type: String,
		uppercase: true,
		index: true,
		required: true
	}
}));