var gulp = require('gulp'),
    sass = require('gulp-sass')
    cleanCSS = require('gulp-clean-css');

var paths = {
  es: {
    scss: './edgestar/style/scss/',
    css: './edgestar/style/css/',
  }
};

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function(){
  return gulp.src(paths.es.scss + '*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(paths.es.css));
});

gulp.task('compile-minify-css', function() {
  return gulp.src(paths.es.css + '*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.es.css));
});

gulp.task('watch', function(){
  gulp.watch(paths.es.scss + '*.scss', ['sass']);
});