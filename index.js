
// Require keystone
var kadm = require('@kstudio/kadm');
var kadmCms = require('@kstudio/kadm-plugin-cms');
var kadmwxapp = require('@kstudio/kadm-plugin-wxapp');
var kadmwx = require('@kstudio/kadm-plugin-wx');
var mall = require('@kstudio/kadm-plugin-mall');
// var ci = require('@kstudio/kadm-plugin-ci');
var path = require('path');
module.exports = exports = new function()
{
	// process.env.CLOUDINARY_URL=process.env.CLOUDINARY_URL||"cloudinary://247181424266945:cHUwYyEGRV7WH_8bdjTmkydGP7c@hwqie6qjg";
	process.env.COOKIE_SECRET=process.env.COOKIE_SECRET||"99422c0d14bdc450d124958ba098d3bed10e8bdc537781d654e7a4bdbddb20ca";
	// process.env.EMAIL_HOSTNAME="";
	// process.env.MANDRILL_APIKEY=process.env.MANDRILL_APIKEY||"MJBMvNWAZCSKUNHxHC1vAA";
	// process.env.MANDRILL_USERNAME=process.env.MANDRILL_USERNAME||"app31974532@heroku.com";
	process.env.NODE_ENV=process.env.NODE_ENV || /* "production"; */  "debug";
	// process.env.PAPERTRAIL_API_TOKEN = process.env.PAPERTRAIL_API_TOKEN || "yucq0bU4ls8XjzBzPQ2";
	process.env.MONGOLAB_URL=process.env.MONGOLAB_URL || "mongodb://kinfen:deadkill@localhost/kadm?authSource=admin";

	process.env.SESSION_STORE=process.env.SESSION_STORE || "mongo";
	process.env.AMAP_KEY=process.env.AMAP_KEY || "f54f9335180c9b9e415cd81b79e80646";
	process.env.REDIS_URL=process.env.REDIS_URL || "redis://localhost/1";
    process.env.PORT = process.env.PORT || 3000;
	kadm.init({
		"port":	process.env.PORT,
		"plugins": [
			kadmCms,
			kadmwxapp,
			kadmwx,
			mall,
		],
		"site-statics": __dirname + '/public',
		'session store': process.env.SESSION_STORE,

		'session store options':process.env.SESSION_STORE === 'redis' ? {
			// "host": "localhost", // Redis服务器主机名
			// "port": 6379, // Redis服务器端口
			"ttl": 86400,
			"prefix": "kadm:", // Key前缀默认为"sess:"
			// "db":1,
			// "pass":'1qazXSW2',

			"url": process.env.REDIS_URL, // 比如 redis://user:pass@host:port/db
		} : {}
	});
	kadm.import(path.join(__dirname, 'models'));
	kadm.set("routes", require("./routes"));
	// "@kstudio/kadm-plugin-cms": "../kadm-plugin-cms",
    // "@kstudio/kadm-plugin-mall": "../kadm-plugin-mall",
    // "@kstudio/kadm-plugin-wx": "../kadm-plugin-wx",
    // "@kstudio/kadm-plugin-wxapp": "../kadm-plugin-wxapp",
	kadm.start({
		onStart:() => {
			var http = kadm.getAdminPlus().httpServer
			// io = require('socket.io')(4000, {
			// 	transports:'polling'
			// });
			// console.log('ready for socket:');
			// io.on('connection', (socket) => {
			// 	console.log('a user ' + count++ +' connected');
			// 	socket.on('msg', function(msg){
			// 		socket.emit('msg',"server:" + msg);
			// 	});
			// 	socket.on('disconnect', (reason) => {
			// 		console.log("reason:" + reason);
			// 	});
			// 	socket.on('error', (error) => {
			// 		console.log("error:" + error);
			// 	  });
			// })
		}
	});
};

