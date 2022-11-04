const router = require("express").Router();

const navs = require("../navs.json");

router.get("/", (req, res) => {
	res.status(200).render("vehicules", {
		title: "PM - Liste de véhicules",
		navs: navs
	});
});

module.exports = router;