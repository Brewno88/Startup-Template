const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile style.scss into style.css
function style(){
    // get the .scss file
    return gulp.src('scss/style.scss')
    // pass 'scss/style.scss' into the compiler
    .pipe(sass())
    // create a folder named 'css' with inside a compiled 'style.css'
    .pipe(gulp.dest('./css'));
}
exports.style = style;
// run 'gulp style' in terminal to run this function

// watch for any changes
function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    // watch for any change in any .scss file
    gulp.watch('./scss/**/*.scss', style);
    // watch for any change in index.html
    gulp.watch('./html').on('change', browserSync.reload);
    // watch for any change in any .js file
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.watch = watch;