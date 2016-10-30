var gulp = require('gulp'),
  less = require('gulp-less'),
  sourcemap = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var src = {
  less: 'app/less/*.less',
  js: './app/js/*.js',
  css: 'app/css',
  html: 'app/*.html'
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
    .pipe(autoprefixer())
    .pipe(concat('slide.css'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest(src.css))
    .pipe(reload({
      stream: true
    }));
});

// 压缩JS文件
gulp.task('compress', function(cb) {
  pump([
      gulp.src(src.js),
      uglify(),
      gulp.dest('./dist')
    ],
    cb
  );
});

gulp.task('default', ['serve']);
