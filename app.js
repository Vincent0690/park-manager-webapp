const database = require("./back/database.js");
const logger = require("./back/logger.js");
const dotenv = require("dotenv").config();
const device = require("express-device");
const cache = require("./back/cache.js");
const express = require("express");
const helmet = require("helmet");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

database.connect()
.then(() => {
	logger.info("READY", "database");

	cache.update()
	.then()
	.catch(err => {
		logger.error("COULD_NOT_UPDATE", "database", err);
	
		return process.exit(1);
	});
})
.catch(err => {
	logger.error("COULD_NOT_CONNECT", "database", err);

	return process.exit(1);
});

app.set("views", path.join(__dirname, "front", "views"));
app.use(express.static("front/public"));
app.set("view engine", "pug");
app.use(device.capture());
app.use(helmet({
	crossOriginEmbedderPolicy: false,
	crossOriginResourcePolicy: false,
	contentSecurityPolicy: {
		directives: {
			defaultSrc: [
				"'self'",
				"'unsafe-inline'"
			],
			scriptSrc: [
				"'self'",
				"maxcdn.bootstrapcdn.com",
				"code.jquery.com",
				"cdn.jsdelivr.net",
				"'unsafe-inline'"
			],
	  		styleSrc: [
				"'self'",
				"maxcdn.bootstrapcdn.com",
				"'unsafe-inline'"
			],
	  		fontSrc: [
				"'self'",
				"maxcdn.bootstrapcdn.com",
				"'unsafe-inline'"
			],
			imgSrc: [
				"'self'",
				"data:",
				"i.imgur.com"
			]
		}
	}
}));

device.enableDeviceHelpers(app);

require("./front/router")(app);

app.listen(PORT, () => {
	logger.info("READY", "webapp");
});