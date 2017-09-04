
// Require keystone
var kadm = require('./kadm');

module.exports = exports = new function()
{
	
	process.env.CLOUDINARY_URL="cloudinary://247181424266945:cHUwYyEGRV7WH_8bdjTmkydGP7c@hwqie6qjg";
	process.env.COOKIE_SECRET="99422c0d14bdc450d124958ba098d3bed10e8bdc537781d654e7a4bdbddb20ca";
	process.env.EMAIL_HOSTNAME="";
	process.env.MANDRILL_APIKEY="MJBMvNWAZCSKUNHxHC1vAA";
	process.env.MANDRILL_USERNAME="app31974532@heroku.com";
	process.env.NODE_ENV="debug";
	process.env.PAPERTRAIL_API_TOKEN="yucq0bU4ls8XjzBzPQ2";
	process.env.MONGOLAB_URL="mongodb://mongo/kadm";

	kadm.init({
		"port":	3000
	});
	kadm.set("routes", require("./routes"));
	kadm.start();
};

