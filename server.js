(function() {
	'use strict';


	var express        = require('express'),
			bodyParser     = require('body-parser'),
			app            = express(),
			errorHandler   = require('errorhandler'),
			methodOverride = require('method-override'),
			hostname       = process.env.HOSTNAME || '127.0.0.1',
			port           = parseInt(process.env.PORT, 10) || 9999,
			publicDir      = process.argv[2] || __dirname + '/';


	app.use(methodOverride());
	app.use(bodyParser.json()); //support json encoded bodies
	app.use(bodyParser.urlencoded({
		extended: true
	})); //support encoded bodies
	app.use(express.static(publicDir)); //serves files statically.
	app.use(errorHandler({
		dumpExceptions: true,
		showStack: true,
	}));

	app.get('/*', function(req, res) {
		res.sendFile('/index.html', {
			root: __dirname
		});
	});

	console.log('Server showing \n %s listening at http://%s:%s',
		publicDir, hostname, port);
	app.listen(port, hostname);
}());
