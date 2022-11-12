const mongoose = require("mongoose");

const optionsSchema = new mongoose.Schema({
	hasAutomaticGearbox: Boolean, //Does it have an automatic gearbox?
	hasAC: Boolean, //Does it have AC?
	hasPMRRamp: Boolean, //Does it have a PMR ramp?
	hasReverseCam: Boolean //Does it have a reverse camera?
});

const engineSchema = new mongoose.Schema({
	brand: {
		type: String,
		required: true
	},
	model: {
		type: String,
		required: true
	},
	euroCertification: Number, //(ex: 6)
	critairCertification: Number, //(ex: 2)
	fuelType: String, //(ex: DIESEL, GASOLINE, HYDROGEN, HYBRID, ELECTRIC)
	horsepower: Number, //in hp (ex: 310)
	cylinders: Number, //(ex: 6)
	oilCapacity: Number, //in liters (ex: 24)
	oilQuality: String, //(ex: 15w30)
	oilChangeFrequencyInKms: Number, //(ex: 60 000)
	oilChangeFrequencyInDays: Number, //(ex: 365)
	injectionType: String, //(ex: INJECTOR_PUMP, HIGH_PRESSURE_RAMP)
	coolingMethod: String, //(ex: WATER, AIR)
	bore: Number, //in mm (ex: 107)
	stroke: Number, //in mm (ex: 124)
	displacement: Number, //in liters (6.7)
	maxHpRPMRange: Number, //in RPM (ex: 2200)
	maxRPM: Number,
	maxTorque: Number, //in NM (ex: 1100)
});

const gearboxSchema = new mongoose.Schema({
	model: {
		type: String, //Gearbox model name
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Gearbox brand name
		uppercase: true,
		required: true
	},
	speeds: Number,
	type: String, //HYDRAULIC_COUPLE_CONVERTER, MANUAL, ROBOTIZED, AUTO
	bymassFlywheel: Boolean
});

const retarderSchema = new mongoose.Schema({
	model: {
		type: String, //Retarder model name
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Retarder brand name
		uppercase: true,
		required: true
	},
	type: String, //HYDRAULIC_OIL, HYDRAULIC_WATER, ELECTRIC
	bimassFlywheel: Boolean
});

const brakeSchema = new mongoose.Schema({
	method: String, //(ex: DISCS)
});

const reducerSchema = new mongoose.Schema({
	model: {
		type: String, //Reducer model name
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Reducer brand name
		uppercase: true,
		required: true
	},
	ratio: Number //Diff ratio (ex: 4.27)
});

const frontAxleSchema = new mongoose.Schema({
	model: {
		type: String, //Axle model name
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Axle brand name
		uppercase: true,
		required: true
	},
	brake: brakeSchema,
	type: String, //(ex: INDEPENDENT, RIGID)
	maxLoad: Number //in kg (ex: 7100)
});

const rearAxleSchema = new mongoose.Schema({
	model: {
		type: String, //Axle model name
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Axle brand name
		uppercase: true,
		required: true
	},
	brake: brakeSchema,
	type: String, //(ex: SINGLE_REDUCTION_HYPOID_RIGID)
	maxLoad: Number, //in kg (ex: 12300)
	reducer: reducerSchema
});

const additionalAxleSchema = new mongoose.Schema({
	model: {
		type: String, //Axle model name
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Axle brand name
		uppercase: true,
		required: true
	},
	brake: brakeSchema
});

const axlesSchema = new mongoose.Schema({
	numbersOfAxles: Number,
	tyresSize: String, //(ex: 295/80R22.5)
	rimSize: String, //(ex: )
	front: frontAxleSchema,
	rear: rearAxleSchema,
	front: frontAxleSchema,
	additional: additionalAxleSchema
});

module.exports = mongoose.model("Vehicules", new mongoose.Schema({
	model: {
		type: String, //Vehicule model name (ex: LD 13 PLUS)
		uppercase: true,
		required: true
	},
	brand: {
		type: String, //Vehicule brand name (ex: TEMSA)
		uppercase: true,
		required: true
	},
	options: {
		type: optionsSchema, //Vehicule options
		required: true
	},
	engine: engineSchema, //Engine data
	gearbox: gearboxSchema, //Gearbox data
	retarder: retarderSchema, //Retarder data
	axles: axlesSchema, //Axles data
	height: Number, //Vehicule height in mm
	length: Number, //Vehicule length in mm
	width: Number, //Vehicule width in mm
	parts: Array, //Array of Strings _id parts list
	type: String, //Vehicule type (ex: SCHOOL_BUS, TOURISM_BUS, LIGHT_TRUCK, CAR)
	fuelTankCapacity: Number //Fuel Tank Capacity in liters (ex: 350)
}));