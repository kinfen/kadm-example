
var kadm = require('@kstudio/kadm')
var Types = require('@kstudio/kadm-fields/FieldTypes');
var TestRecord = new kadm.List('TestRecord');
TestRecord.add({
	name: { label:"名称", type: String, required: true, initial:true},
	num:{label:"number", type:Number},
	publishedDate: {label:"发布日期", type: Types.Datetime, default: Date.now }
});
TestRecord.defaultColumns = 'name, publishedDate|100';
TestRecord.register();