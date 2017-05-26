var gulp = require('gulp'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    imagemin = require('gulp-imagemin'),
    src = 'src/',
    dist = 'dist/',
    paths = {
        styles: ['src/less/main.less'],
        fonts: ['node_modules/font-awesome/fonts/**/*'],
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
        .pipe(gulp.dest(dist + 'css/'));
});

// Fonts
gulp.task('fonts', ['clean'], function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(dist + 'fonts/'));
});


// Compress images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(dist + 'images/'));
});

gulp.task('watch', function () {
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('build', ['clean', 'less', 'fonts', 'imagemin']);