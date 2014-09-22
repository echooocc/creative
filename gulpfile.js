var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var coffee = require("gulp-coffee");
var coffeelint = require("gulp-coffeelint");
var browserSync = require('browser-sync');
var filter = require('gulp-filter');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var reload = browserSync.reload;


var options = {
    // JADE 
    JADE_SOURCE     : "./app/views/**/*.jade",
    JADE_DEST       : "./dist",

    // SASS / CSS
    SASS_SOURCE     : "./app/styles/**/*.scss",
    SASS_DEST       : "./dist/css",
 
    // JavaScript
    COFFEE_SOURCE   : "./app/scripts/**/*.coffee",
    COFFEE_DEST     : "./dist/js",
 
    DIST_DEST       : "./dist",

    // Images
    IMAGE_SOURCE    : "./app/images/*",
    IMAGE_DEST      : "./dist/images",
 
};

// Clean 
gulp.task('clean', function () {
  return gulp.src(options.DIST_DEST)
        .pipe(clean());
});

//Compile Jade & inject css & js
gulp.task('jade',['sass','coffee'],function () {
  return gulp.src(options.JADE_SOURCE)
        .pipe(jade({pretty:true}))
        .pipe(inject(gulp.src(['**/*.css', '**/*.js'],{read:false, cwd: options.DIST_DEST}), {addRootSlash: true}))
        .pipe(gulp.dest(options.JADE_DEST));
});
 
// Compile Our Sass & Minify CSS
gulp.task('sass', function() {
    return gulp.src(options.SASS_SOURCE)
        .pipe(sass({sourcemap: true}))
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest(options.SASS_DEST));
});

// Concatenate & Minify CoffeeScript
gulp.task('coffee', function() {
    return gulp.src(options.COFFEE_SOURCE)
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
        .pipe(coffeelint.reporter('fail'))
        .pipe(coffee())
        .pipe(concat('app.js'))
        .pipe(rename('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(options.COFFEE_DEST));
});

// Compress Image
gulp.task('images', function() {
    return gulp.src(options.IMAGE_SOURCE)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest(options.IMAGE_DEST));

});

// Start the server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: options.DIST_DEST,
            index: "index.html"
        }
    });
});


// Watch Files For Changes, defualt task
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(options.IMAGE_SOURCE, ['image',  reload]);
    gulp.watch(options.SASS_SOURCE, ['sass',  reload]);
    gulp.watch(options.COFFEE_SOURCE, ['coffee',  reload]);
    gulp.watch(options.JADE_SOURCE, ['jade',  reload]);
    // gulp.watch(options.IMAGE_SOURCE , ['images', reload]);
});

// Build Task build for distribution
gulp.task('build', ['clean'], function () {
    return gulp.start('images','sass', 'jade', 'coffee');
});