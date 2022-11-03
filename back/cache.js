const Vehicules = require("../models/Vehicules");
const PlanningEntries = require("../models/PlanningEntries.js");

const cache = {};

module.exports = {
	get() {
		return {
			vehicules: cache.vehicules,
			planning: cache.planning,
		};
	},
	update() {
		return new Promise((resolve, reject) => {
			
		});
	}
};