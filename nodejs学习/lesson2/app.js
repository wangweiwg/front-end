var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function (req, res) {
	var q = req.query.q;
	console.log('q', q);
	var md5Value = '';
	if (q) {
     	md5Value = utility.md5(q);
     	res.send(md5Value);
	} else {
		res.send('请传入参数q');
	}
	
})

app.listen(3000, function () {
	console.log('server listen at port 3000');
})