var config = require("../config.js");
var gulp = require("gulp");

var $ = require('gulp-load-plugins')();

gulp.task("compass", function(){
  gulp
    .src( config.src.sass + "**/*.sass" )
    .pipe( $.plumber() )
    .pipe( $.compass({
      confile_file: "config.rb",
      comments: false,
      css: config.public.style,
      sass: "sass"
    }) );
});
