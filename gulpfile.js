"use strict";

// Include gulp
var gulp = require('gulp');

// Include plugins
var jasmine = require('gulp-jasmine');

// Test JS
gulp.task('specs', function () {
    return gulp.src('assets/js/spec/lib/*.js')
        .pipe(jasmine());
});

// Default Task
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('default', ['specs']);
