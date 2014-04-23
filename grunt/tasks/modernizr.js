module.exports = {
	devFile: '<%= config.vendor %>/modernizr/modernizr.js',
	outputFile: '<%= config.dist %>/bower_components/modernizr/modernizr.js',
	files: [
		'<%= config.dist %>/scripts/{,*/}*.js',
		'<%= config.dist %>/styles/{,*/}*.css',
		'!<%= config.dist %>/scripts/vendor/*'
	],
	uglify: true
};