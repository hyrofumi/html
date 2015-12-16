var gulp = require("gulp");

gulp.task( "watch", function(){
  var _ = require("../config.js");
  var $ = require('gulp-load-plugins')();

  gulp.watch(_.compass.src, ["compass"]);
  gulp.watch(_.jade.src, ["jade"]);
} );
