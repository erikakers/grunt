module.exports = function(grunt) {

	'use strict';

	grunt.registerTask('serve', function(target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

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