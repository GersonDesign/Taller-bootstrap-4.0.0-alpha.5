/**Instanciamos los paquetes **/ 
var gulp 		= require('gulp'),
		jade 		= require('gulp-jade'),
		stylus 		= require('gulp-stylus'),
		nib			= require('nib'),
		browserSync = require('browser-sync').create();


gulp.task('serverTeam',['HTML'], function(){
	browserSync.init({
		server:'Public',
		port: 9000
	});
	gulp.watch('*jade', ['HTML']);
	gulp.watch('*styl',['CSS']);
});
//* */
gulp.task('HTML', function(){
	gulp.src('*jade')
		.pipe(jade())
		.pipe(gulp.dest('Public'))
		.pipe(browserSync.stream());
});

gulp.task('CSS', function(){
	gulp.src('*styl')
		.pipe(stylus({
			use: nib(),
			import:['nib'],
			'include css':true,
			compress:true
		}))
		.pipe(gulp.dest('Public'))
		.pipe(browserSync.stream());
});




