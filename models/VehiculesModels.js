const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
	hasAutomaticGearbox: Boolean, //Does it have an automatic gearbox?
	hasAC: Boolean, //Does it have AC?
	hasPMRRamp: Boolean, //Does it have a PMR ramp?
	hasReverseCam: Boolean //Does it have a reverse camera?
});

const partsSchema = new mongoose.Schema({
	description: {
		type: String, //Part type (ex: FUEL_FILTER)
		references: [partsReferencesSchema], //Array of objects
		required: true
	},
});

module.exports = mongoose.model("Vehicules", new mongoose.Schema({
	id: {
		type: String, // Vehicule model id (ex: LD13PLUS_AC_AUTO)
		index: true,
		uppercase: true,
		required: true
	},
	model: {
		type: String, //Vehicule model (ex: LD 13 PLUS)
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Vehicule brand (ex: TEMSA)
		uppercase: true,
		required: true
	},
	options: {
		type: [optionsSchema], //Vehicule options
		required: true
	},
	height: Number, //Vehicule height in meters
	length: Number, //Vehicule length in meters
	width: Number, //Vehicule width in meters
	parts: [partsSchema], //Vehicule parts list
	engine: Object
}));