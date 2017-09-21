// Include plugins
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var cache = require('gulp-cache');
var cleanCSS = require('gulp-clean-css');

// Minify JS
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src(['./js/*.js', './views/js/*.js']),
        rename({suffix: '.min'}),
        uglify(),
        gulp.dest('min')
    ],
    cb
  );
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src(['./css/*.css', './views/css/*.css'])
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('min'));
});

// Clearing the cache
gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

// Default Task
gulp.task('default', ['minify-js', 'clear', 'minify-css']);