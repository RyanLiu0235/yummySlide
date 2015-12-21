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
    gulp.src(['./example/less/*.less', './example/*.html', './example/js/*.js'])
        .pipe(watch(['./example/less/*.less', './example/*.html'], ['less']))
        .pipe(connect.reload());
});
gulp.task('less', function() {
    gulp.src(['./example/less/*.less', './example/dist/*.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .on('error', function(err) {
            console.log(err)
        })
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./example/css'));
});

gulp.task('watch', function() {
    gulp.watch(['./example/less/*.less', './example/dist/*.less'], ['less']);
});

gulp.task('default', ['watch', 'less', 'connect'], function () {
    gulp.start('livereload');
});
