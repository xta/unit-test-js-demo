"use strict";

// Include gulp
var gulp = require('gulp');

// Include plugins
var mocha       = require('gulp-mocha');
var chai        = require("chai");
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream'); // makes browserify bundle compatible with gulp
var streamify   = require('gulp-streamify');
var browserify  = require('browserify');

// Test JS
gulp.task('specs', function () {
    return gulp.src('assets/js/spec/lib/*.js')
        .pipe(mocha());
});

// Concatenate, Browserify & Minify JS
gulp.task('scripts', function() {
    return browserify('./assets/js/app.js').bundle()
        .pipe(source('all.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./public/'));
});

// Default Task
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('default', ['specs', 'scripts']);
