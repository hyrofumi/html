var gulp = require("gulp");

gulp.task("jade", function(){
  var _ = require("../config.js");
  var $ = require('gulp-load-plugins')();
  var path = require('path');

  gulp
    .src( _.jade.src )
    .pipe( $.plumber() )
    // .pipe( $.data(function(file){
    //   var __filedir = path.dirname( file.path );
    //   var __filepath = __filedir + "/" + path.basename(file.path) + '.json';
    //   var __json = require( __filepath );
    //   delete(require.cache[__filepath]); //キャッシュを削除する
    //   return __json;
    // }))
    .pipe( $.jade({
      pretty: true
    }) )
    .pipe(gulp.dest( _.jade.dest ));
});
