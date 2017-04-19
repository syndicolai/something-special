var gulp = require('gulp');
var browserify = require('browserify');
var mocha = require('gulp-mocha');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var babel = require('babel-register');
var browserSync  = require('browser-sync');
var sass = require('gulp-sass');
var plug = require('gulp-load-plugins')({ lazy: true });
// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
  'react-dom',
  'react-bootstrap'
];

// keep a count of the times a task refires
var scriptsCount = 0;
 
// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
    bundleApp(false);
});

gulp.task('babelify', function (){
 return browserify({
    extensions: ['.js'],
    entries: './main.js',
  })
    .transform(babelify.configure({ ignore: /(node_modules)/ }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
		.pipe(source('vendors.js'))
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function(){
	console.log('running css task');
   gulp.src('css/*.css')
  //  .pipe(concat('styles.css'))
  //  .pipe(minify())
   .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('deploy', function (){
	bundleApp(true);
});

// ar mocha = require('gulp-mocha');
// var babel = require('babel/register');

// gulp.task('test', function() {
//     return gulp.src(['test/**/*.js'])
//         .pipe(mocha({
//             // compilers: {
//             //     js: babel
//             // }
// 						 compilers: [
//             'js:babel-core/register',
//         ]
//         }));
// });

gulp.task('test', function() {
  return gulp.src(['./test/**/*.js'])
    .pipe(mocha({
      compilers:babel
  }));
});

gulp.task('watch', function () {
	gulp.watch(['./src/**/*.js', './sass/*.scss', './test/**/*.js'], ['scripts', 'sass', 'test']).on('change', function(e){
		 console.log(e.path + ' has ' + e.type);
		 browserSync.reload();
	} );
});
 

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['scripts',  'watch', 'browsersync']);
 
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false,
    online: false,
    notify: false,
  });
});

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
	scriptsCount++;
	// Browserify will bundle all our js files together in to one and will let
	// us use modules in the front end.
	var appBundler = browserify({
    	entries: './src/main.js',
    	debug: true
  	})
 
	// If it's not for production, a separate vendors.js file will be created
	// the first time gulp is run so that we don't have to rebundle things like
	// react everytime there's a change in the js file
  	if (!isProduction && scriptsCount === 1){
  		// create vendors.js for dev environment.
  		browserify({
        require: dependencies,
        debug: true
		  })
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest('./dist/js/'));
  	}
  	if (!isProduction){
  		// make the dependencies external so they dont get bundled by the 
		// app bundler. Dependencies are already bundled in vendor.js for
		// development environments.
  		dependencies.forEach(function(dep){
  			appBundler.external(dep);
  		})
  	}
 
  	appBundler
  		// transform ES6 and JSX to ES5 with babelify
	  	.transform("babelify", {presets: ["es2015", "react"]})
	    .bundle()
	    .on('error',gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('./dist/js/'));
}