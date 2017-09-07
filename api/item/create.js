/**
 * Created by kinfen on 16/8/30.
 */

var kadm = require( 'kadm');
var _ = require('lodash');
var api = require('../base');
module.exports = function (req, res){
	var data = (req.method === 'POST') ? req.body : req.query;
	let keystone = kadm.getAdminPlus();
	let list = keystone.list(req.params.model);
	var action = data.action;
	var item = list.model();
	var data = _.assignIn({}, req.body, req.files);
	list.validateInput(item, data, function (err) {
		if (err) {
			api.error(res,  err);
			return;
		}
		list.updateItem(item, data, function (err) {
			if (err) {
				console.log(err);
				api.error(res, err);
			} else {
				api.json(res, {
					status:1,
					info:{
						item:list.getData(item)
					}
				});
			}
		});
	});
}
