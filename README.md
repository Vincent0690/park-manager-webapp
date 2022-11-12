# Park Manager Webapp
 A webapp to manage a park of vehicules.

# Features

# Database

All Database Schemas are stored in [/models/](./models/)

> [VehiculesModels](./models/VehiculesModels.js)

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
	height: Number, //Vehicule height in meters
	length: Number, //Vehicule length in meters
	width: Number, //Vehicule width in meters
	parts: Array, //Array of Strings _id parts list
	type: String, //Vehicule type (ex: BUS, LIGHT_TRUCK, CAR)