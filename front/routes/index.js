const router = require("express").Router();

const navs = require("../navs.json");

router.get("/", (req, res) => {
	res.status(200).render("index", {
		title: "PM - Acceuil",
		navs: navs
	});
});

module.exports = router;