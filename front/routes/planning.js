const router = require("express").Router();

const navs = require("../navs.json");

router.get("/", (req, res) => {
	res.status(200).render("planning", {
		title: "PM - Planning",
		navs: navs
	});
});

module.exports = router;