const
    gulp         = require('gulp'),
    less         = require('gulp-less'),
    concat       = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss     = require('gulp-clean-css'),
    browserSync  = require('browser-sync').create(),
    rename       = require('gulp-rename')

gulp.task('less', () =>
    gulp
        .src('./less/index.less')
        .pipe(autoprefixer())
        .pipe(less())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./public/styles/css'))
        .pipe(cleanCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/styles/css'))
        .pipe(browserSync.stream())
)

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './public/'
        },
        open: false
    })

    gulp.watch('./less/**/*.less', ['less'])
    gulp.watch('./public/index.html').on('change', browserSync.reload)
})

gulp.task('default', ['less', 'serve'])
