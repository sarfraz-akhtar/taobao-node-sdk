const { getTimeForZone } = require('./moment-datetime')
module.exports = {
	    tmall_api_base_url : 'http://gw.api.tbsandbox.com',
        tmall_api_config : {
            app_key: "test",
			app_secret : "test",
                format: "json",
                session: "6101218cc8ec11f231240c3af01dcde3bc8332cc67bdcb42074082786",
                sign_method: "hmac",
                timestamp: getTimeForZone("Asia/Ulaanbaatar", "YYYY-MM-DD HH:mm:ss"),
                v: "2.0"
        }

}
