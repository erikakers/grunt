module.exports = {
	vendor: {
		files: [
			// List any additional files that will be concatted into a single file
			// Follow the same object pattern if a secondary concatted file is needed
			// ie. touch event scripts
			{
				src: [
					'<%= base.src %>/components/jquery/jquery.js',
					'<%= base.src %>/components/underscore/underscore.js'
				],
				dest: '<%= base.build %>/scripts/plugins.js'
			},
			{
				src: [
					'<%= base.src %>/components/es5-shim/es5-shim.js'
				],
				dest: '<%= base.build %>/scripts/polyfills.js'
			}
		]
	},
	head: {
		files: [
			{
				src: [
					'<%= base.src %>/components/modernizr/modernizr.js'
				],
				dest: '<%= base.build %>/scripts/head.js'
			}
		]
	},
	dev: {
		files: [
			{
				src: [
					'<%= base.src %>/js/namespacing.js',
					'<%= base.src %>/js/config.js'
				],
				dest: '<%= base.build %>/scripts/main.js'
			}
		]
	}
}