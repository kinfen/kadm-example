
var kadm = require('@kstudio/kadm')
var Types = require('@kstudio/kadm-fields/FieldTypes');
var TestRecord = new kadm.List('TestRecord');
TestRecord.add({
	name: { label:"String", type: String, required: true, initial:true},
	icon:{ label:"AntdsIcon", type: Types.AntdsIcon},
	bool:{ label:"Boolean", type: Types.Boolean},
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

	moduleselect:{label:'ModuleSelect', type:Types.ModuleSelect, default:'Channel'},

	username:{label:'Name', type:Types.Name},
	number:{label:'Number', type:Types.Number},
	passowrd:{label:'Passowrd', type:Types.Password},
	qrcode:{label:'QRCode', type:Types.QRCode},
	relationship:{label:'Relationship', type:Types.Relationship, ref:'User'},
	relationship_create:{label:'RelationshipInCreateLine', type:Types.Relationship, ref:'TestRecord',createInline:true,},
	
	select:{label:'Select', type:Types.Select, options:[{
		label:'label1',value:'value1',
	},{
		label:'label2',value:'value2'
	}]},
	select2:{label:'Select Number', type:Types.Select, numeric:true, options:[{
		label:'label1',value:1,
	},{
		label:'label2',value:2
	}]},
	text:{label:'Text', type:Types.Text},
	textarea:{label:'Textarea', type:Types.Textarea},
	typevalue:{label:'TypeValue', type:Types.TypeValue},
	url:{label:'Url', type:Types.Url},
});
TestRecord.defaultColumns = 'name, qrcode';
TestRecord.register();