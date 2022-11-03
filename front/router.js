const navs = require("./navs.json");

module.exports = (app) => {
	app.use("/+", require("./routes/index"));

	app.use((req, res) => {
		res.status(404).render("404", {
			title: "PM - Not Found",
			navs: navs
		});
	});
};