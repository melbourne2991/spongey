module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'app/public/css/app.css': 'app/public/sass/app.scss'
				}
			}
		},
		watch: {
			dist: {
				files: 'app/public/sass/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
}