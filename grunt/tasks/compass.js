/*
	Compiling for SCSS compass.
	CSS Min is handled in another task this is just for SCSS compiling.
	importPath should be changed if the project is using any third party SCSS libraries.
 */
module.exports = {
	compass: {
		options: {
			sassDir: '<%= config.src %>/scss',
			cssDir: '<%= config.app %>/css',
			importPath: [
				'<%= config.vendor %>/foundation/scss',
				'<%= config.vendor %>/bourbon/app/assets/stylesheets'
			]
		}
	}
};