var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./less/**/*.less', ['less']);
});
