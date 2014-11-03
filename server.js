/*jshint strict: true, node: true*/
//simple static page express app created with html/css
//contains a link which returns and image from the server
'use strict';
var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('public', { maxAge: 86400000})); //one day cache

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.get('/file', function(req, res) {
    res.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("./public/image.png").pipe(res);
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Server started on " + port);
});
