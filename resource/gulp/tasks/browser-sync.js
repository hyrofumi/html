var gulp = require("gulp");

gulp.task("server", function(){
  var _ = require("../config.js");
  var $ = require('gulp-load-plugins')();
  var browserSync = require("browser-sync");


  browserSync({
      server: {
          baseDir: _.browserSync.http // ルートとなるディレクトリを指定
      }
  });

  // srcフォルダ以下のファイルを監視
  gulp.watch([_.compass.src,_.jade.src], function() {
      browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
  });


});
