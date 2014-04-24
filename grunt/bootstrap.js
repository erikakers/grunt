module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('bootstrap', [
			'modernizr',
			'concat:vendor'
	]);
};