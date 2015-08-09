module.exports = function(grunt) {

    var karmaOptions = {
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'test/*.js'
        ],
        // logLevel: 'ALL',
        browsers: ['Chrome'],
        singleRun: true
    };

    grunt.initConfig({
        karma: {
            add: {
                options: karmaOptions
            }
        },
    });

    grunt.loadNpmTasks('grunt-karma');
};
