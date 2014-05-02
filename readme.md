# A Little Grunt Project 
[![Build Status](https://travis-ci.org/erikakers/grunt.png?branch=master)](https://travis-ci.org/erikakers/grunt) [![devDependency Status](https://david-dm.org/erikakers/grunt/dev-status.svg)](https://david-dm.org/erikakers/grunt#info=devDependencies)

After getting tried of dealing with 500 line Gruntfiles I figured it was time to clean up the process a little bit. Now tasks and options are split into folders and the Gruntfile is just the glue that makes everything work. 

##How this works
In the SRC directory:
- Components Managed with Bower
- Components are Concatinated together into plugins.js
- Javascript is written in modular pieces broken into folders
- Javascript is concatinated together into main.js
- SCSS is broken into a modular structure for elements and pages
- All files form the SRC directory are compiled into the APP directory

In the APP directory:
