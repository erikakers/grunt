// http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html

'use strict';

module.exports = function(grunt) {
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		bowerrc: grunt.file.readJSON('.bowerrc'),

		banner: '/*!\n' +
			' * <%= pkg.name %>-<%= pkg.version %>\n' +
			' * <%= pkg.author %>\n' +
			' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			' */\n\n',

		base = {
			src: 'src',
			build: 'app',
			dist: 'dist'
			vendor: '<%= bowerrc.directory %>'
		}
	// The rest of the confirations are loaded in via `loadConfig`
	};

	grunt.loadTasks('tasks');
};