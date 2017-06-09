var gulp = require('gulp'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    src = 'src',
    dist = 'dist',
    paths = {
        styles: ['index.less'],
        fonts: [
            'node_modules/bootstrap/fonts/**/*',
            'node_modules/font-awesome/fonts/**/*'
        ],
        images: ['src/images/**/*.png']
    };

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(dist)
        .pipe(clean());
});

// Process less
gulp.task('less', ['clean'], function () {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(rename('sbac-ui-kit.min.css'))
        .pipe(gulp.dest(`${dist}/css`));
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
