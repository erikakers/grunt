'use strict';

var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = {
	options: {
		port: 9000,
		hostname: 'localhost'
	},
	livereload: {
		options: {
			middleware: function (connect) {
				return [
					lrSnippet,
					mountFolder(connect, config.app),
				];
			}
		}
	},
	dist: {
		options: {
			middleware: function (connect) {
				return [
					mountFolder(connect, config.dist)
				];
			}
		}
	}
}
