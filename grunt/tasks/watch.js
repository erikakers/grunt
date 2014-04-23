// watch task options
module.exports = {
	gruntfile: {
		files: ['Gruntfile.js']
	},
	sass: {
		files: ['<%= config.app %>/scss/{,*/}*.{scss,sass}'],
		tasks: ['sass:dev', 'autoprefixer']
	},
	styles: {
		files: ['<%= config.app %>/styles/{,*/}*.css'],
		tasks: ['newer:copy:styles', 'autoprefixer']
	},
	browserify: {
		files: ['<%= config.app %>/scripts/**/*.js', 'test/{,*/}*.js'],
		tasks: ['browserify:dev', 'concat:dev', 'i18n']
	},
	mocha: {
		files: ['test/{,*/}*.js'],
		tasks: ['browserify:test', 'mocha']
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files: [
			'<%= config.app %>/**/*.html',
			'.tmp/styles/{,*/}*.css',
			'{.tmp,<%= config.app %>}/scripts/{,*/}*.js',
			'<%= config.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
		]
	}
};