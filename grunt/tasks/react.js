module.exports = {
	compile: {
		files: [
			{
				expand: true,
				cwd: '<%= base.src %>/javascript/jsx',
				src: ['**/*.jsx'],
				dest: '<%= base.src %>/javascript/views',
				ext: '.js'
			}
		]
	}
};