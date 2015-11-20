module.exports = function(grunt){
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          compass :{
               dist :{
                    options: {
                      config: './config.rb'
                    }
               }
          },
          coffee: {
               compile: {
                    files: {
                         "scripts/index.js": [
                              "scripts/_src/define.coffee"
                              , "scripts/_src/sp.browser.coffee"
                              , "scripts/_src/index.coffee"
                         ]
                    }
               }
          },
          // uglify:
          // {
          //   safetymap:
          //   {
          //       files:
          //       {
          //           'scripts/safetymap.min.js': [
          //                './scripts/lib/release.js',
          //           ]
          //       }
          //   }
          // },
          watch :{
               styles: {
                    //監視ファイル
                    files: ['styles/_src/*.scss'],
                    //実行タスク
                    tasks:['compass']
               },
               scripts: {
                    //監視ファイル
                    files: ['scripts/src/*.coffee'],
                    //実行タスク
                    tasks:['coffee']
               }
          }
     });

     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-compass');
     grunt.loadNpmTasks('grunt-contrib-coffee');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.registerTask('default', [ 'watch' ]);
};