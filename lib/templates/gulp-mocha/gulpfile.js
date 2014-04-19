var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('default',['lint','test']);

gulp.task('test',function () {
	gulp.src('test/**/*.js')
		.pipe(mocha({reporter:'spec'}));
});

gulp.task('lint', function() {
  gulp.src(['./lib/**/*.js',
            './test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
	.pipe(jshint.reporter('fail'));
});