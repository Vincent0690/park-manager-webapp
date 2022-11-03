import database from "./back/database";
import favicon from "serve-favicon";
import device from "express-device";
import logger from "./back/logger";
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

database.connect()
.then(() => {
	logger.info("READY", "database");
})
.catch(err => {
	logger.error(err, "database");

	return process.exit(1);
});