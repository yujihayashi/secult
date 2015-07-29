module.exports = function( grunt ) {

    grunt.initConfig({
    // Tasks que o Grunt deve executar
    less: {
        development: {
            options: {
                // paths: ["css"]
            },
            files: {
                "css/site.css": "css/less/site.less"
            }
        },
        production: {
            options: {
                // paths: ["css"],
                // cleancss: true,
                modifyVars: {
                    // imgPath: '"http://mycdn.com/path/to/images"',
                    // bgColor: 'red'
                }
            },
            files: {
                "css/site.css": "css/less/site.less"
            }
        }
    }, // less
    uglify : {
      options : {
        mangle : false 
      },

      my_target : {
        files : {
          'js/site.js' : [ 'js/_js/site.js' ]
        }
      }
    }, // uglify
    watch : {
        dist : {
            files : [
            'css/less/**/*',
            'js/**/*'
            ],

            options: {
                livereload: {
                    port: 35729
                }
            },
            tasks : [ 'less' ]
        }
    } // watch

});
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'less' ] );
  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );
};