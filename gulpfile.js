var gulp = require('gulp'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    src = 'src',
    dist = 'dist',
    paths = {
        styles: [
            'src/less/bundle.less',
            'src/less/wkhtmltopdf.less'
        ],
        fonts: [
            'node_modules/bootstrap/fonts/**/*',
            'node_modules/font-awesome/fonts/**/*'
        ],
        images: ['src/images/**/*.png']
    };

// Process less
gulp.task('less', ['clean', 'less:main', 'less:wkhtmltopdf']);
gulp.task('less:main', ['clean'], function () {
   return gulp.src(paths.styles[0])
       .pipe(less())
       .pipe(cssmin())
       .pipe(rename('sbac-ui-kit.min.css'))
       .pipe(gulp.dest(`${dist}/css`));
});

gulp.task('less:wkhtmltopdf', ['clean'], function () {
   return gulp.src(paths.styles[1])
       .pipe(less())
       .pipe(cssmin())
       .pipe(rename('sbac-ui-kit-wkhtmltopdf.min.css'))
       .pipe(gulp.dest(`${dist}/css`));
});

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(dist)
        .pipe(clean());
});

// Fonts
gulp.task('fonts', ['clean'], function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(`${dist}/fonts`));
});


// Compress images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(`${dist}/images`));
});

gulp.task('watch', function () {
    gulp.watch('src/less/**/*.less', ['less']);
});

gulp.task('build', ['less', 'fonts', 'imagemin']);
