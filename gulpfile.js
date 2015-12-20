var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: '7040'
    });
});
gulp.task('livereload', function() {
    gulp.src(['./less/*.less', './*.html', './js/*.js'])
        .pipe(watch(['./less/*.less', './*.html'], ['less']))
        .pipe(connect.reload());
});
gulp.task('less', function() {
    gulp.src(['./less/*.less', './dist/*.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', function(err) {
            console.log(err)
        })
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch(['./less/*.less', './dist/*.less'], ['less']);
});

gulp.task('default', ['watch', 'less', 'connect'], function () {
    gulp.start('livereload');
});
