var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  gulp.src('src/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
  gulp.watch('src/style.css', ['styles']);
  gulp.watch('src/flex-nav.css', ['styles']);
  gulp.watch('src/flex-nav-toggle.css', ['styles']);
})

gulp.task('default', ['styles', 'watch']);
