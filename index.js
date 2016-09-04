'use strict';
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function (opts) {
	opts = opts || {};

	return through.obj(function (file, enc, cb) {
	
		try {
		    var backender = require('backender.js').init();

		    if (opts.test) {
		        backender.runTests();
		    } else {
		        backender.runServer();
		    }

		    this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-backender', err));
		}

		cb();
	});
};
