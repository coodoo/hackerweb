// jx: local dev 用的小型 web server
"use strict";

var http = require('http')
// Express
var express = require('express');
var app = express();
app.use(express.static('.'));

// catch all
// 目前是顯示 404，將來考慮直接導向回首頁
app.use( '*', function(req, res, next ){
	res.redirect('/404');
})

// start the HTTP server
var httpServer = http.createServer(app);

//
httpServer.listen( 3000, function (err) {
	if (err) {
		console.warn('Can\'t start server. Error: ', err, err.stack);
		return;
	}
	console.log('server started port', 3000);
});
