'use strict';

var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
// var fileinclude = require('gulp-file-include');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

var glob = require('glob');
var path = require('path');
var fs = require('fs');

var spritesmith = require('gulp.spritesmith');



var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];


function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

gulp.task('default', ['browser-sync'],function () {

	gulp.start('sprites', 'scripts',/* 'move-image',*/ 'scss', 'watch');

});




gulp.task('index-map', function () {
  return glob('./html/*!(index).html', function (err, files) {

    var fileCollection, stats;

    fileCollection = files.map(function (name) { return path.basename(name, '.html'); });

    var html = '<html><head><title> Access </title></head><body class="index-map-page"><h5 class="document-date-modified">Updated: <span id="date-modified"></span></h5></div><ul class="map-list">';

    fileCollection.forEach(function (file, i) {
      stats = fs.statSync(files[i]);
      html += '<li><a href="./html/'+ file +'.html"><span>'+ file + '</span></a></li>';
    });

    html += '</ul></body></html>';

    fs.writeFileSync('./index.html', html);
  });
});

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}


gulp.task('watch', function() {
	// browserSync({
	// 	server: "./html/"
	// });

	gulp.watch('./html/scss/**/*.scss', ['scss'/*, browserSync.reload*/]);
	gulp.watch('./html/sjs/**/*.js', ['scripts'/*, browserSync.reload*/]);
	// gulp.watch('./**/*.php', [browserSync.reload]);

	gulp.watch('./html/img/**/*');
});


gulp.task('build', function() {
});


// gulp.task('move-image', function() {
// 	gulp.src(['./html/img/**/*', '!./html/img/{empty,sprites,sprites/**}'])
// 		.pipe(gulp.dest('./html/img'));
// });


gulp.task('sprites', function () {
	var spriteData = gulp.src('./html/img/sprites/*.png').pipe(spritesmith({
		cssName: '_sprite.scss',
		imgName: '../img/l-sprite.png',
		imgPath: '../img/l-sprite.png',
		retinaImgName: '../img/h-sprite.png',
		retinaImgPath: '../img/h-sprite.png',
		retinaSrcFilter: './html/img/sprites/*@2x.png',
		padding: 20,
		algorithm: 'top-down',
		algorithmOpts: {sort: false}
	}));
	return spriteData.pipe(gulp.dest('./html/scss/'));
});



gulp.task('browser-sync', function() {
	browserSync({
		server: "./"
	});
});

gulp.task('scss', function () {
	gulp.src('./html/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'compact',
			includePaths: sassPaths
		}).on('error', sass.logError))

		.pipe(sourcemaps.init())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(sourcemaps.write('./'))

		//.pipe(uglify())
		.pipe(gulp.dest('./html/css'))
		.pipe(browserSync.reload({stream:true}));
});


gulp.task('scripts', function() {
	return gulp.src([
		'./bower_components/jquery/dist/jquery.js',

			// Plugins
			'./bower_components/bootstrap/dist/js/bootstrap.min.js',
			'./bower_components/bootstrap/js/collapse.js',

			'./html/sjs/start-noconflict.js',
			'./html/sjs/app.js',
			'./html/sjs/end-noconflict.js',
		])
		.pipe(concat('all.js'))
		.pipe(babel())
		.on('error', errorLog)
		.pipe(gulp.dest('./html/js'))
		// .pipe(jshint('.jshintrc'))
		// .pipe(jshint.reporter('default'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./html/js'));
		// .pipe(notify({ message: 'Scripts task complete' }));
});