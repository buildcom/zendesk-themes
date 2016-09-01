var gulp = require('gulp'),
    sass = require('gulp-sass')
    cleanCSS = require('gulp-clean-css');

gulp.task('default', ['sass','watch']);

gulp.task('sass', function(){
  return gulp.src('./edgestar/style/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./edgestar/style/css'));
});

gulp.task('compile-minify-css', ['sass'], function() {
  return gulp.src('./edgestar/style/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./edgestar/style/css/'));
});

gulp.task('watch', function(){
  gulp.watch('./edgestar/style/scss/*.scss', ['compile-minify-css']);
});

