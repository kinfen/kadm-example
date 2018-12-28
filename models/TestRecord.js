
var kadm = require('@kstudio/kadm')
var keystone = kadm.getAdminPlus();
var Types = kadm.Field.Types;
var TestRecord = new keystone.List('TestRecord');
TestRecord.add({
	name: { label:"名称", type: String, required: true, initial:true},
	num:{label:"number", type:Number},
	publishedDate: {label:"发布日期", type: Types.Datetime, default: Date.now }
});
TestRecord.defaultColumns = 'name, publishedDate|100';
TestRecord.register();