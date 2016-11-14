var gulp = require('gulp'),
  less = require('gulp-less'),
  sourcemap = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  minifyCSS = require('gulp-minify-css'),
  processhtml = require('gulp-processhtml'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var src = {
  less: 'app/less/*.less',
  js: 'app/js/*.js',
  css: 'app/css',
  html: 'app/*.html'
};

var buildSrc = {
  js: 'docs/js',
  css: 'docs/css',
  html: 'docs/'
}

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
    .pipe(autoprefixer())
    .pipe(sourcemap.write())
    .pipe(gulp.dest(src.css))
    .pipe(reload({
      stream: true
    }));
});

// 压缩css文件
gulp.task('minify-css', ['less'], function() {
  return gulp.src(src.css + '/*.css')
    .pipe(concat('slide.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(buildSrc.css));
});

// 压缩JS文件
gulp.task('uglify-js', function() {
  pump([
    gulp.src(src.js),
    uglify(),
    gulp.dest('./dist')
  ]);
});

// 处理html文件
gulp.task('processhtml', function () {
  return gulp.src(src.html)
    .pipe(processhtml())
    .pipe(gulp.dest(buildSrc.html));
});

// 发布
gulp.task('build', ['uglify-js', 'minify-css', 'processhtml'], function() {
  gulp.src('./dist/*.js')
    .pipe(gulp.dest(buildSrc.js));
})

gulp.task('default', ['serve']);
