var express = require('express');
var os      = require('os');
var path    = require('path');

var PORT = process.env.PORT || 5000;

express()
	.use(express.static(path.join(__dirname, 'dist')))
	.use(express.static(path.join(__dirname, 'www')))
	.listen(PORT, function() {
		console.log('Server running', 'http://' + os.hostname() + ':' + PORT);
	});
