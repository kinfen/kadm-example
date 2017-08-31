/**
 * Created by kinfen on 16/8/30.
 */

var Base = function(){};
Base.prototype.json = function (res, obj)
{
	res.json(obj);
}
Base.prototype.error = function (res, err)
{
	if (typeof err == 'string'){
		err = new Error(err);
	}
	this.json(res, {status:0,  error: 'error', detail: err ? err : '' });

}
exprots = module.exports = new Base();
