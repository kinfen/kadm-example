/**
 * Created by kinfen on 16/5/22.
 */
var	express = require('express');
var kadm = require('../kadm');
// Setup Route Bindings
exports = module.exports = function() {

	var router = express.Router();
	var staticRoutes = require("./staticRoutes")();
	var serverRoutes = require("./serverRoutes")();
	router.use ("/", staticRoutes);
	router.use ("/", serverRoutes);
	return router;
}
