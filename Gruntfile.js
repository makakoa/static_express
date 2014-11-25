/*jshint node: true*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jscs'); // need to change to just jscs

    grunt.initConfig({
        jshint: {
            all: ["public/*.js", "./*.js"]
        },

        jscs: {
            all: {
                options: {
                    'standard': 'Idiomatic',
                    'reportFull': true
                },
                files: {
                    src: ["server.js"]
                }
            }
        }
    });
    grunt.registerTask('test', ['jshint', 'jscs']);
    grunt.registerTask('default', ['test']);
};