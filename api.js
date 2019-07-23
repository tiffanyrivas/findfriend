var path = require("path");

module.exports = function(app) {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(name, "index.html"));
	});
	app.use(function(req, res) {
		res.sendFile(path.join(name, "quest.html"));
	});
};