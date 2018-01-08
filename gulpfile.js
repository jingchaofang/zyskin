var gulp = require('gulp');
var postcss = require('gulp-postcss');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
// var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');
var less = require('gulp-less');
var path = require('path');
var pump = require('pump');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var gulpSequence = require('gulp-sequence');
var contact = require('gulp-concat');

let cleanCSS = require('gulp-clean-css');
// let sourcemaps = require('gulp-sourcemaps');
// cb means callback
gulp.task('less', function(cb) {
  pump([
      gulp.src('./less/**/*.less'),
      // sourcemaps.init(),
      less({
        paths: [path.join(__dirname, 'less', 'includes')]
      }),
      contact('common.css'),
      // sourcemaps.write(),
      gulp.dest('./dist/css')
    ],
    cb
  );
});

gulp.task('minify-js', function(cb) {
  pump([
      gulp.src('./js/**/*.js'),
      uglify(),
      rename({
        suffix: '.min',
      }),
      gulp.dest('./dist/js')
    ],
    cb
  );
});

gulp.task('minify-css', ['less'], function(cb) {
  pump([
      gulp.src('./dist/css/common.css'),
      cleanCSS(),
      rename({
        suffix: '.min',
      }),
      gulp.dest('./dist/css/')
    ],
    cb
  );
});

gulp.task('build', (callback) => {
  gulpSequence('minify-css', 'minify-js')(callback);
});

gulp.task('postcss', function(cb) {
  var processors = [
    precss,
    mqpacker,
    cssnext({warnForDuplicates: false}),
    cssnano
  ];
  pump([gulp.src('./src/*.css'), postcss(processors), gulp.dest('./dest/')], cb);
});
