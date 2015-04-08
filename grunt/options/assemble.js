module.exports = {
	options: {
		layoutdir: '<%= config.src %>/html/layouts',
		partials: [
			'<%= config.src %>/html/components/{,*/}*.hbs',
			'<%= config.src %>/html/elements/{,*/}*.hbs'
			],
		data: ['<%= config.src %>/html/data/*.{json,yml}'],
		flatten: true
	},
	pages: {
		options: {
			layout: 'default.hbs'
		},
		files: [{
			'<%= config.app %>/': ['<%= config.src %>/html/pages/{,*/}*.hbs']
		}]
	},
	styleguide: {
		options: {
			layout: 'blank.hbs'
		},
		files: [{
		'<%= config.app %>/styleguide/': ['<%= config.src %>/html/pages/{,*/}*.hbs']
		}]
	}
};
