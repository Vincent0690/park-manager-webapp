# Park Manager Webapp
 A webapp to manage a park of vehicules.

# Features

# Database

__All Database Schemas are stored in [/models/](./models/)__

### Example of a [VehiculesModels](./models/VehiculesModels.js) document

	```json
	{
		"model": "LD 13 PLUS",
		"brand": "TEMSA",
		"options": {
			"hasAutomaticGearbox": true,
			"hasAC": true,
			"hasPMRRamp": true,
			"hasReverseCam": false
		},
		"engine": {

		},
		"gearbox": {

		},
		"retarder": {

		},
		"axles": {
			"numbersOfAxles": 4,
			"tyresSize": "295/80R22.5",
			"rimSize": "",
			"front": {
				"model": "RL 82EC",
				"brand": "ZF",
				"brake": {

				},
				"type": "INDEPENDENT", //(ex: INDEPENDENT, RIGID)
				"maxLoad": 7100
			},
			"rear": {

			},
			"additional": {

			}
		},
		"height": 3350,
		"length": 13050,
		"width": 2550,
		"parts": [
			""
		],
		"type": "SCHOOL_BUS",
		"fuelTankCapacity": 350
	}
	```