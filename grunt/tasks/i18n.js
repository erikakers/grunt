module.exports = {
	server: {
		src: '<%= config.app %>/locales/html/**/*.html',

		options: {
			locales: '<%= config.app %>/locales/*.json',
			defaultLocale: '<%= config.app %>/locales/en-US.json',
			output: '<%= config.app %>/localehtml',
			delimiters: 'custom',
			base: '<%= config.app %>/locales/html'
		},
	}
};