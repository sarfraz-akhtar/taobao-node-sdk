const  { tmall_api_base_url }  = require('./config')
const axios = require("axios")
module.exports = {
	api : axios.create({
		baseURL: tmall_api_base_url,
		timeout: 15000,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
		}
	})
}
