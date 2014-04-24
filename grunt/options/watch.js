// watch task options
module.exports = {
	gruntfile: {
		files: ['Gruntfile.js']
	},
	sass: {
		files: ['<%= config.src %>/scss/{,*/}*.{scss,sass}'],
		tasks: ['sass:dev', 'autoprefixer']
	},
	javascript: {
		files: ['<%= config.src %>/javascript/{,*/}*.js'],
		tasks: ['concat:dev', 'jshint', 'react']
	},
	react: {
		files: ['<%= config.src %>/javascript/jsx/{,*/}*.jsx'],
		tasks: ['react']
	},
	mocha: {
		files: ['test/{,*/}*.js'],
		tasks: ['mocha']
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files: [
			'<%= config.app %>/**/*.html',
			'<%= config.app %>/styles/{,*/}*.css',
			'{.tmp,<%= config.app %>}/scripts/{,*/}*.js',
			'<%= config.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
		]
	}
};