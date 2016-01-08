var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemap = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var src = {
    less: 'app/less/*.less',
    css: 'app/css',
    html: 'app/*.html',
    map: 'app/maps'
};

// Static Server + watching less/html files
gulp.task('serve', ['less'], function() {

    browserSync({
        server: "./app"
    });

    gulp.watch(src.less, ['less']);
    gulp.watch(src.html).on('change', reload);
});

// Compile less into CSS
gulp.task('less', function() {
    return gulp.src(src.less)
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(sourcemap.write(src.map))
        .pipe(gulp.dest(src.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('default', ['serve']);
