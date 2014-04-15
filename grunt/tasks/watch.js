'use strict';
var LIVERELOAD_PORT = 35729;

module.exports = {
	sass: {
		files: ['<%= config.src %>/sass/{,*/}*.sass'],
        tasks: 'sass'
    },
    javascript: {
        files: ['<%= config.src %>/javascript/{,*/}*.js'],
        tasks: ['concat:dev']
     },
     livereload: {
        options: {
            livereload: LIVERELOAD_PORT
        },
        files: [
            '<%= config.build %>/*.html',
            '<%= config.build %>/css/{,*/}*.css',
            '<%= config.build %>/js/{,*/}*.js',
            '<%= config.build %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    }
}