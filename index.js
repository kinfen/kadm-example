
// Require keystone
var kadm = require('kadm');
var kadmCms = require('kadm-plugin-cms');
module.exports = exports = new function()
{
	process.env.CLOUDINARY_URL=process.env.CLOUDINARY_URL||"cloudinary://247181424266945:cHUwYyEGRV7WH_8bdjTmkydGP7c@hwqie6qjg";
	process.env.COOKIE_SECRET=process.env.COOKIE_SECRET||"99422c0d14bdc450d124958ba098d3bed10e8bdc537781d654e7a4bdbddb20ca";
	process.env.EMAIL_HOSTNAME="";
	process.env.MANDRILL_APIKEY=process.env.MANDRILL_APIKEY||"MJBMvNWAZCSKUNHxHC1vAA";
	process.env.MANDRILL_USERNAME=process.env.MANDRILL_USERNAME||"app31974532@heroku.com";
	process.env.NODE_ENV=process.env.NODE_ENV || "debug";
	process.env.PAPERTRAIL_API_TOKEN = process.env.PAPERTRAIL_API_TOKEN || "yucq0bU4ls8XjzBzPQ2";
	process.env.MONGOLAB_URL=process.env.MONGOLAB_URL || "mongodb://localhost/kadm";
    process.env.PORT = process.env.PORT || 3000;
	kadm.init({
		"port":	process.env.PORT,
		"plugins": [kadmCms],

	});
	kadm.set("routes", require("./routes"));
	kadm.start();
};

