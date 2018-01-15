'use-strict';

//////////////////////////////
// Requires
//////////////////////////////

var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var concat = require("gulp-concat");
var minHtml = require("gulp-minify-html");
var uglify = require("gulp-uglify");

// SVG Config
var config = {
  mode: {
    symbol: { // symbol mode to build the SVG
      dest: 'sprite', // destination foldeer
      sprite: 'sprite.svg', //sprite name
      example: true // Build sample page
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
};


gulp.task('sprite-page', function() {
  return gulp.src('svg/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('.'));
});

gulp.task('sprite-shortcut', function() {
  return gulp.src('sprite/sprite.svg')
    .pipe(gulp.dest('.'));
});

gulp.task("html", function() {
  gulp.src("./main.html")
  .pipe(minHtml())
  .pipe(concat("index.html"))
  .pipe(gulp.dest("./"))
}); 

gulp.task('default', ['sprite-page', 'sprite-shortcut',"html"]);
