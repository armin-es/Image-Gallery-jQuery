module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig();

    // Load the plugin that provides concatination task
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Load the plugin that provides linting in javaScript files task
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides html minification task
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Load the plugin that provides css minification task
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Load the plugin that provides watch task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'htmlmin', 'concat']);
    

};