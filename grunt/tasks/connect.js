// connect task options
module.exports = {
	options: {
		port: 9000,
		livereload: 35731,
		// change this to '0.0.0.0' to access the server from outside
		hostname: 'localhost'
	},
	livereload: {
		options: {
			open: false,
			base: [
				'<%= config.app %>'
			]
		}
	},
	test: {
		options: {
			base: [
				'test',
				'<%= config.app %>'
			]
		}
	},
	dist: {
		options: {
			open: true,
			base: '',
			livereload: false
		}
	}
};