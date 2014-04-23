// copy task options
module.exports = {
	dist: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= config.app %>',
			dest: '<%= config.dist %>',
			src: [
				'*.{ico,png,txt}',
				'.htaccess',
				'images/{,*/}*.webp',
				'styles/fonts/{,*/}*.*'
			]
		}]
	},
	styles: {
		expand: true,
		dot: true,
		cwd: '<%= config.app %>/styles',
		dest: '.tmp/styles/',
		src: '{,*/}*.css'
	},
	dump: {
		files: [{
			expand: false,
			src: '.tmp/styles/{,*/}*.css',
			dest: '<%= config.dotNet %>/css/app.css'
		}, {
			expand: false,
			src: '.tmp/scripts/app.js',
			dest: '<%= config.dotNet %>/js/app.js'
		}, {
			expand: false,
			src: '<%= config.app %>/images/{,*/}*.*',
			dest: '<%= config.dotNet/images/'
		}]
	}
};