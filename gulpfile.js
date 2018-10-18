const gulp = require('gulp')
const less = require('gulp-less')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const browserSync = require('browser-sync').create()

gulp.task('less', () =>
	gulp
		.src('./styles/*.less')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(less())
		.pipe(concat('calendar.css'))
		.pipe(cleanCss())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('styles'))
		.pipe(browserSync.stream())
)

gulp.task('serve', () => {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
	gulp.watch('./styles/*.less', ['less'])
	gulp.watch('./index.html').on('change', browserSync.reload)
})

gulp.task('default', ['less', 'serve'])
