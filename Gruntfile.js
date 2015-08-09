module.exports = function(grunt) {

    var karmaOptions = {
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'test/*.js'
        ],
        logLevel: 'ALL',
        browsers: ['Chrome'],
        singleRun: true
    };

    grunt.initConfig({
        karma: {
            add: {
                options: karmaOptions
            }
        },
        mutationTest: {
            karma: {
                options: {
                    code: 'src/*.js',
                    specs: 'test/*.js',
                    mutate: 'src/*.js',
                    logLevel: 'ALL',
                    karma: karmaOptions
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-mutation-testing')
};
