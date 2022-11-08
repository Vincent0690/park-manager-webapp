module.exports = {
	generator() {
		return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
	}
};