
var kadm = require('@kstudio/kadm')
var Types = require('@kstudio/kadm-fields/FieldTypes');
var TestRecord = new kadm.List('TestRecord');
TestRecord.add({
	name: { label:"String", type: String, required: true, initial:true},
	icon:{ label:"AntdsIcon", type: Types.AntdsIcon},
	bool:{ label:"Boolean", type: Types.Boolean},
	num:{label:"Number", type:Number},
	code:{ label:"Code", type: Types.Code},
	color:{ label:"Color", type: Types.Color},
	date:{ label:"Datetime", type: Types.Datetime},
	email:{ label:"Email", type: Types.Email, hosts:[
		'qq.com',
		'kstudio.top'
	]},
	file_avatar:{ label:"file_avatar",
		type: Types.File,
		uploadPath:'/test',
		fileType:'avatar',
		schema:{
			path:true,
			url:true,
	}},
	file_wall:{ label:"file_picwall",
		type: Types.File,
		uploadPath:'/test',
		fileType:'picture-wall',
		schema:{
			path:true,
			url:true,
	}},
	file_all:{ label:"file_all",
		type: Types.File,
		uploadPath:'/test',
		fileType:'all',
		schema:{
			path:true,
			url:true,
	}},

});
TestRecord.defaultColumns = 'name, publishedDate|100';
TestRecord.register();