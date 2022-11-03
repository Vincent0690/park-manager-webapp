module.exports = {
	warn(text, source) {
		return console.warn(`[WARN] [${source.toUpperCase()}] ${text}`);
	},
	error(text, source, trace) {
		console.error(`[ERROR] [${source.toUpperCase()}] ${text}`);
	
		console.trace(trace);
	
		return console.log("-END-");
	},
	info(text, source) {
		return console.info(`[INFO] [${source.toUpperCase()}] ${text}`);
	}
};