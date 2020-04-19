
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
	goodPropertyMarixField:{ label:"GoodPropertyMarixField", type: Types.GoodPropertyMarix},
	html:{label:'Html', type:Types.Html},
	key:{label:'Key', type:Types.Key},
	mailaddress:{label:'MailAddress', type:Types.MailAddress},
	maplocation:{label:'MapLocation', type:Types.MapLocation},

	moduleselect:{label:'ModuleSelect', type:Types.ModuleSelect},

	username:{label:'Name', type:Types.Name},
	number:{label:'Number', type:Types.Number},
	passowrd:{label:'Passowrd', type:Types.Password},
	qrcode:{label:'QRCode', type:Types.QRCode},
});
TestRecord.defaultColumns = 'name, qrcode';
TestRecord.register();