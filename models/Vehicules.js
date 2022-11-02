import mongoose from "mongoose";

module.exports = mongoose.model("Vehicules", mongoose.Schema({
	id: String,
	type: String
}));