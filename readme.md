# A Little Grunt Project 
[![Build Status](https://travis-ci.org/erikakers/grunt.png?branch=master)](https://travis-ci.org/erikakers/grunt) [![devDependency Status](https://david-dm.org/erikakers/grunt/dev-status.svg)](https://david-dm.org/erikakers/grunt#info=devDependencies)

After getting tried of dealing with 500 line Gruntfiles I figured it was time to clean up the process a little bit. Now tasks and options are split into folders and the Gruntfile is just the glue that makes everything work. 

##How this works

In stead of trying to use the same Gruntfile for every different project, I'm using this repo to maintain the tasks that I find my self using with the folder structure needed for my projects. 

Then based on the project I can build Grunt Tasks that are project based with all of the Grunt package options in this repo. 

##Folder Structure

- `SRC` - Holds all source files. This includes SCSS, Assemble, Bower Packages and Javascript. 
- `APP` - All files are compiled into this directory and is where the livereload server serves pages from. 
- `DIST` - For production ready files. This folder is clean and rebuild with every build. 

## Javascript

Currently a tool like Require.js or Browserify isn't used. Javascript is written in the `SRC` directory and concatenated together into a `main.js` file. 
