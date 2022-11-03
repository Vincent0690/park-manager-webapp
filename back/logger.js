export function info(text, source) {
    return console.info(`[INFO] [${source}] ${text}`);
};

export function error(text, source, trace) {
    console.error(`[ERROR] [${source}] ${text}`);

    return console.trace(trace);
};

export function warn(text, source) {
	return console.warn(`[WARN] [${source}] ${text}`);
};