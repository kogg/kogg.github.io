var express = require('express');
var os      = require('os');
var path    = require('path');

var PORT = process.env.PORT || 5000;

express()
	.use('/css', express.static(path.join(__dirname, 'temp/css')))
	.use('/js', express.static(path.join(__dirname, 'temp/js')))
	.use(express.static(path.join(__dirname, 'www')))
	.use(express.static(path.join(__dirname, 'temp')))
	.listen(PORT, function() {
		console.log('Server running', 'http://' + os.hostname() + ':' + PORT);
	});
