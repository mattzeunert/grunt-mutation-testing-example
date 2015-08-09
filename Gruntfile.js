module.exports = function(grunt) {


  grunt.initConfig({
      karma: {
          options: {
            configFile: "karma.conf.js",
            logLevel: "ALL"
          },
          fixtures: {
              singleRun: true
          }
      }
  });

  grunt.loadNpmTasks('grunt-karma');
};
