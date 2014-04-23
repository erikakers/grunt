module.exports = {
	server: [
		'sass:dev',
		//'browserify:dev',
		//'browserify:vendor',
		//'i18n',
		//'copy:styles',
		//'copy:dump'
	],
	test: [
		'copy:styles',
		'jshint',
		'browserify:vendor',
		'browserify:dev',
		'browserify:test'
	],
	dist: [
		'sass:dist',
		'browserify',
		'copy:styles',
		'imagemin',
		'svgmin',
		'htmlmin'
	]
};