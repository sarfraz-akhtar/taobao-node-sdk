const  { tmall_api_config }  = require('./config')
const querystring = require("querystring")
const md5Hmac = require("crypto-js/hmac-md5")
const { api } = require('./taobao.axios')
const taobao = require('taobao');
taobao.core.API_CONFIG = tmall_api_config
taobao.core.getConfig = function() {
	return this.API_CONFIG
}
taobao.core.signArgs = function(args){
	const app_secret = args.app_secret || 'test'
	delete args.app_secret
		var argArr = [];

				for (var argName in args) {
					if (argName != 'sign' && argName != 'app_secret') {
						argArr.push(argName + args[argName]);
					}
				}

	const dataStr = argArr.sort().join('');
return md5Hmac(dataStr, app_secret)
		.toString()
		.toUpperCase()
}

taobao.core.call = function(httpArgs, args, callback) {

	//compatiple with call (args, callback) signature
		if (arguments.length <= 2) {
			callback = args;
			args = httpArgs;
			httpArgs = {};
		}
	args = Object.assign(args,this.getConfig())
		if (!args.session) {
			delete args.session;
		}
	args.sign = this.signArgs(args);
	if(!callback){
	console.log("HERRRRRR");
	return api.post("/router/rest", querystring.stringify(args))
	}
	callback(api.post("/router/rest", querystring.stringify(args)))

}
module.exports = taobao;
