/*
 * 域名解析
 * dns模块包含两类函数：
 * 1、第一类函数，使用底层操作系统工具进行域名解析，且无需进行网络通信。
      这类函数只有一个：dns.lookup()。
 * 2、第二类函数，连接到一个真实的 DNS 服务器进行域名解析，且始终使用网络进行 DNS 查询。 
	  这类函数包含了 dns 模块中除 dns.lookup() 以外的所有函数。 这些函数使用与 dns.lookup() 
      不同的配置文件（例如 /etc/hosts）。 这类函数适合于那些不想使用底层操作系统工具进行域名解析、
      而是想使用网络进行 DNS 查询的开发者。
 */
const dns = require('dns');

// 第一类
dns.lookup('baidu.com', (err, address, family) => {
	console.log('IP 地址: %j 地址族: IPv%s', address, family)
});

// 第二类
dns.resolve4('baidu.com', (err, addresses) => {
	if (err) throw err;
	console.log(`IP 地址: ${JSON.stringify(addresses)}`);
	addresses.forEach((a) => {
		dns.reverse(a, (err, hostnames) => {
			if (err) {
				throw err
			}
			console.log(`IP 地址 ${a} 逆向解析到域名: ${JSON.stringify(hostnames)}`)
		})
	})
})