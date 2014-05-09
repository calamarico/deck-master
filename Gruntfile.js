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
    }
  });
};
