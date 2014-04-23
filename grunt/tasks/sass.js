module.exports = {
	dev: {
		options: {
			sourcemap: true,
			loadPath: [
				//'<%= config.vendor %>/foundation/scss'
			]
		},
		files: [{
			expand: true,
			cwd: '<%= config.src %>/scss/',
			src: ['*.scss'],
			dest: '<%= config.app %>/css/',
			ext: '.css'
		}]
	}
};