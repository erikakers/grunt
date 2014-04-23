// clean task options
module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'<%= config.dist %>/*',
				'!<%= config.dist %>/.git*'
			]
		}]
	},
	server: ['.tmp', '<%= config.app %>/localehtml']
};