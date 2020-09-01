var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');

var app = express();

app.get('/', function (req, res, next) {

	// https://search.bilibili.com/video?keyword=%E5%B0%8F%E7%8C%AA%E4%BD%A9%E5%A5%87%E5%8A%A8%E7%94%BB%E7%89%87
	// http://www.iqiyi.com/a_19rrh570gl.html?vfm=2008_aldbd
	superagent.get('http://www.iqiyi.com/a_19rrh570gl.html?vfm=2008_aldbd')
	.end(function (err, sres) {
		console.log(sres)
		if (err) {
			return next(err);
		}
		var $ = cheerio.load(sres.text);
		var items = [];

		$('.site-piclist li').each(function (idx, element) {
			var $element = $(element)
			var $href = $element.children()[0].children[0].next.attribs.href
			var $title = $element.children()[1].children[1].children[1].children[0].data.replace(/\s*/g, "")

			// http://www.iqiyi.com/a_19rrh570gl.html?vfm=2008_aldbd

			items.push({
				title: $title,
				href: $href
			})
		});
		res.send(items);
	})

	fs.exists('/etc/passwd', (exists) => {
	  console.log(exists ? 'it\'s there' : 'no passwd!');
	});

});

app.listen(3000, function () {
	console.log('server listen at port 3000');
})