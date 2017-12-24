var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('cssnano');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var rename = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var isimport = require('postcss-import');


gulp.task('css', function () {
  gulp.src('css/main.css')
  .pipe(sourcemaps.init())
  .pipe(rename('style.css'))
  .pipe(postcss([isimport(), cssnext({features: {rem: false}})]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('css'))
});

gulp.task('build', function () {
  gulp.src('*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('build'))
  gulp.src('css/style.css')
  .pipe(postcss([cssnano()]))
  .pipe(gulp.dest('build/css'))
  gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});

gulp.task('js', function () {
  gulp.src([
                'js/parts/moment.js',
                'js/parts/pikaday.js',
                'js/parts/datepicker.js',
                'js/parts/menu.js'
        ])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('js'))
});

gulp.task('watch', function () {
 gulp.watch('./css/blocks/*.less', ['css']);
 gulp.watch('./js/parts/*.js', ['js']);
});
