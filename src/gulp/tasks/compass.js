var gulp = require("gulp");

gulp.task("compass", function(){
  var _ = require("../config.js");
  var $ = require('gulp-load-plugins')();

  gulp
    .src( _.compass.src )
    .pipe( $.plumber() )
    .pipe( $.compass({
      confile_file: _.compass.confile_file,
      comments: _.compass.comments,
      css: _.compass.css,
      sass: _.compass.sass,
    }) );
});
