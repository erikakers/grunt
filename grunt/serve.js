module.exports = function(grunt) {

	'use strict';

	grunt.registerTask('serve', function(target) {

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'concat:dev',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

};