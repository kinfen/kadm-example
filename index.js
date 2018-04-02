
// Require keystone
var kadm = require('kadm');
var kadmCms = require('kadm-plugin-cms');
var kadmwxapp = require('kadm-plugin-wxapp');
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
	// process.env.REDIS_HOST=process.env.REDIS_HOST || 'localhost';
	// process.env.REDIS_PORT=process.env.REDIS_PORT || 6379;
	// process.env.REDIS_URL=process.env.REDIS_URL || "redis://localhost:6379/1";
	process.env.SESSION_STORE=process.env.SESSION_STORE || "mongo"
	process.env.REDIS_URL=process.env.REDIS_URL || "redis://localhost/1";
    process.env.PORT = process.env.PORT || 3000;
	kadm.init({
		"port":	process.env.PORT,
		"plugins": [kadmCms, kadmwxapp],
		"site-statics": __dirname + '/public',
		'session store': process.env.SESSION_STORE,
		'session store options':process.env.SESSION_STORE === 'redis' ? {
			// "host": "localhost", // Redis服务器主机名
			// "port": 6379, // Redis服务器端口
			"ttl": 86400,
			"prefix": "kadm:", // Key前缀默认为"sess:"
			"url": process.env.REDIS_URL, // 比如 redis://user:pass@host:port/db
		} : {}
	});
	kadm.set("routes", require("./routes"));
	kadm.start();
};

