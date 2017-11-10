var gulp = require('gulp'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    cssBase64 = require('gulp-css-base64'),
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
        images: ['src/images/**/*']
    };

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

// Process less
gulp.task('less:main', ['clean'], function () {
    return gulp.src(paths.styles[0])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename('sbac-ui-kit.min.css'))
        .pipe(gulp.dest(`${dist}/css`));
});

gulp.task('less:wkhtmltopdf', ['clean', 'fonts', 'imagemin'], function () {
    return gulp.src(paths.styles[1])
        .pipe(less())
        .pipe(cssmin())
        .pipe(cssBase64({
            extensionsAllowed: ['.png', '.eot', '.svg', '.ttf', '.woff']
        }))
        .pipe(rename('sbac-ui-kit-wkhtmltopdf.min.css'))
        .pipe(gulp.dest(`${dist}/css`));
});
gulp.task('less', ['clean', 'less:main', 'less:wkhtmltopdf']);

// Development setting to have live updates when less is changed
gulp.task('watch', function () {
    gulp.watch('src/less/**/*.less', ['less']);
});

// Main build entry point
gulp.task('build', ['less', 'fonts', 'imagemin']);
