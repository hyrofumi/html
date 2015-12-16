var config = require("../config.js");
var gulp = require("gulp");

var $ = require('gulp-load-plugins')();

gulp.task("server", function(){
  browser({
    server: {
      baseDir: config.paths.public.http
    }
  });
});
