const mongoose = require("mongoose");

const partsCrossReferencesSchema = new mongoose.Schema({
	seller: {
		type: String, //Revendor name (ex: 	MANN FILTERS)
		required: true
	},
	reference: {
		type: String, //Part ref (ex: W950/39)
		required: true
	},
	price: Number
});

module.exports = mongoose.model("Vehicules", new mongoose.Schema({
	id: {
		type: String, //Internal part id (ex: )
		index: true,
		uppercase: true,
		required: true
	},
	type: {
		type: String, //Part type (ex: FUEL_FILTER)
		required: true
	},
	image: String,
	references: [partsCrossReferencesSchema], //Array of objects
}));