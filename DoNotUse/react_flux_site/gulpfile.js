var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(){
	browserify('./src/js/main.js')
		.transform('reactify')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/img/blends/*.*')
		.pipe(gulp.dest('dist/img/blends'));
	gulp.src('src/img/parallaxBackgrounds/*.*')
		.pipe(gulp.dest('dist/img/parallaxBackgrounds'));
	gulp.src('src/img/singleOrigin/*.*')
		.pipe(gulp.dest('dist/img/singleOrigin'));
	gulp.src('src/js/*.*')
		.pipe(gulp.dest('dist/js'));
	gulp.src('src/js/actions/*.*')
		.pipe(gulp.dest('dist/js/actions'));
	gulp.src('src/js/components/*.*')
		.pipe(gulp.dest('dist/js/components'));
	gulp.src('src/js/constants/*.*')
		.pipe(gulp.dest('dist/js/constants'));
	gulp.src('src/js/dispatcher/*.*')
		.pipe(gulp.dest('dist/js/dispatcher'));
	gulp.src('src/js/stores/*.*')
		.pipe(gulp.dest('dist/js/stores'));
	gulp.src('src/js/utils/*.*')
		.pipe(gulp.dest('dist/js/utils'));
	gulp.src('src/js/vendors/*.*')
		.pipe(gulp.dest('dist/js/vendors'));
	gulp.src('src/fonts/roboto/*.*')
		.pipe(gulp.dest('dist/fonts/roboto'));	
});

gulp.task('default', ['browserify', 'copy'], function(){
	return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});