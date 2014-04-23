module.exports = {
	options: {
		assetsDirs: ['<%= config.dist %>']
	},
	html: ['<%= config.dist %>/{,*/}*.html'],
	css: ['<%= config.dist %>/styles/{,*/}*.css']
};