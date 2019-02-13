var gulp = require('gulp');


var less = require('gulp-less');
var path = require('path');
let cleanCSS = require('gulp-clean-css');


// gulp.task('less', function () {
// 	return gulp.src('./style/less/style.less')
// 	  .pipe(less({}))
// 	  .pipe(gulp.dest('./style/css'));
//   });

  gulp.task('watch', function () {
	gulp.watch('./**/*.less', gulp.series(['less']));
  }); //остановить таск - ctrl+C

//   gulp.task('minify-css', () => {
// 	return gulp.src('./style/css/style.css')
// 	  .pipe(cleanCSS())
// 	  .pipe(gulp.dest('./style/css'));
//   });

gulp.task('styless', function () {
	return gulp.src('./style/less/style.less')
	  .pipe(less({}))
	  .pipe(cleanCSS())
	  .pipe(gulp.dest('./style/css'));
  });

gulp.task('default', gulp.series(['watch']));