(function() {
	'use strict';

	module.exports = function(grunt) {
		grunt.initConfig ({
				pkg: grunt.file.readJSON('package.json')
		});

		// measures the time each task takes
		require('time-grunt')(grunt);

		// load grunt config
		require('load-grunt-config')(grunt, {
			jitGrunt: {
				// here you can pass options to jit-grunt (or just jitGrunt: true)
				staticMappings: {
					// here you can specify static mappings, for example:
					useminPrepare: 'grunt-usemin'
				}
			},
		});
	};
}());
