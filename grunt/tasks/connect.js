// connect task options
module.exports = {
	options: {
		port: 9000,
		open: true,
		livereload: 35729,
		// Change this to '0.0.0.0' to access the server from outside
		hostname: 'localhost'
	},
	livereload: {
		options: {
			middleware: function(connect) {
				return [
					connect.static('app')
				];
			}
		}
	}
};