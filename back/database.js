import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export function connect() {
	return new Promise((resolve, reject) => {
		mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			ssl: true,
			user: process.env.DB_USER,
			pass: process.env.DB_PASS
		}, err => {
			if(err) return reject(err);

			resolve();
		});
	});
};