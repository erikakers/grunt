module.exports = {
	options: {
		banner: '<%= banner %>'
	},
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/dist/jquery.js'
		],
		dest: '<%= config.app %>/js/plugins.js'
	},
	dev: {
		src: [
			'<%= config.src %>/javascript/classes/{,*/}*.js'
		],
		dest: '<%= config.app %>/js/main.js'
	}
}