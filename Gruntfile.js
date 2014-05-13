/**
 * Grunt tasks
 * @param {Object} grunt grunt object.
 */
module.exports = function(grunt) {
  // Grunt tasks configuration.
  grunt.initConfig({
    baseName: 'deck-master',
    pkg: grunt.file.readJSON('package.json'),
    source: {
      root: 'app',
      test: 'test',
      build: 'build',
      grunt: 'Gruntfile.js',
      tmp: '<%= source.build %>/tmp',
      publish: '<%= source.build %>/publish/'
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'app'
        }
      }
    },
    jshint: {
      files: ['gruntfile.js', 'app/js/*.js', 'test/**/*.spec.js']
    },
    lesslint: {
      src: ['app/styles/*.less'],
      options: {
        csslint: {
          csslintrc: '.csslintrc'
        }
      }
    },
    less: {
      dev: {
        options: {
          dumpLineNumbers: 'comments',
          //cleancss: true,
          imports: {
            reference: [
              'app/styles/variables.less',
              'app/styles/bootstrap/variables.less',
              'app/styles/bootstrap/mixins.less']
          }
        },
        files: [{
          expand: true,
          cwd: 'app/styles/',
          src: ['style.less', 'bootstrap/bootstrap.less'],
          dest: 'app/styles/css/',
          ext: '.css'
        }]
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lesslint');

  grunt.registerTask('linter', ['jshint', 'lesslint']);
  grunt.registerTask('default', ['jshint', 'lesslint', 'less', 'connect',
    'watch']);
};
