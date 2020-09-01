/*
	说明：该文件总结一些常用的JS操作
	时间：2017年12月6日
	作者：王伟
 */
(function (win) {
	var tools = {};
/***************判断浏览器********************************/
	var ua = window.navigator.userAgent.toLowerCase();
	document.getElementById('info').innerHTML = ua;
	// 判断是不是微信浏览器
	win.isWeiChat = function () {
		if (ua.match(/MicroMessenger/i) == 'micromessenger') { 
			return true; 
		} else { 
			return false; 
		} 
	}
	// 判断是不是支付宝浏览器
	win.isAliPay = function () {
		if (ua.match(/AlipayClient/i) == 'alipayclient') { 
			return true; 
		} else { 
			return false; 
		} 
	}
	// 判断是不是华为自带浏览器
	win.isSelf = function () {
		if (ua.match(/MicroMessenger/i) == 'micromessenger') { 
			return true; 
		} else { 
			return false; 
		} 
	}
	// 判断是不是QQ浏览器
	win.isQQBrowser = function () {
		if (ua.match(/mqqbrowser/i) == 'mqqbrowser') { 
			return true; 
		} else { 
			return false; 
		} 
	}
/*****************字符串去空******************************/
	win.trim = function (string) {
		
	} 
})(window)