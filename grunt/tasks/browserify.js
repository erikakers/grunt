// browserify task options
module.exports = {
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/jquery.js',
			'<%= config.vendor %>/lodash/dist/lodash.js',
			'<%= config.vendor %>/backbone/backbone.js'
		],
		dest: '.tmp/scripts/vendor.js',
		options: {
			debug: true,
			shim: {
				jquery: {
					path: '<%= config.vendor %>/jquery/jquery.js',
					exports: '$'
				},
				lodash: {
					path: '<%= config.vendor %>/lodash/dist/lodash.js',
					exports: '_'
				},
				backbone: {
					path: '<%= config.vendor %>/backbone/backbone.js',
					exports: 'Backbone',
					depends: {
						jquery: '$',
						lodash: '_'
					}
				}
			},
			alias: [
				'<%= config.vendor %>/lodash/dist/lodash.js:underscore',
				'<%= config.vendor %>/backbone/backbone.js:backbone'
			],
			transform: ['debowerify']
		}
	},
	dev: {
		src: ['<%= config.app %>/scripts/main.js'],
		dest: '.tmp/scripts/main.js',
		options: {
			debug: true,
			external: ['jquery', 'lodash', 'backbone']
		}
	},
	test: {
		src: ['test/{,*/}*.js'],
		dest: '.tmp/test/test.js',
		options: {
			debug: true,
			external: ['jquery', 'lodash', 'backbone']
			// ignore: ['test/lib/*.js', 'test/spec/*.js']
		}
	}
};