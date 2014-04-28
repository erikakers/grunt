module.exports = {
	options: {
		layoutdir: '<%= config.src %>/html/layouts',
		layout: 'default.hbs',
		partials: ['<%= config.src %>/html/partials/{,*/}*.hbs'],
		data: ['<%= config.src %>/html/data/*.{json,yml}']
	},
	pages: {
		src: ['<%= config.src %>/html/pages/{,*/}*.hbs'],
		dest: '<%= config.app %>/'
	}
};