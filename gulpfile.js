// load gulp and tasks
var gulp = require('./gulp')([
  'clean'
]);

var runSeq = require('run-sequence');

gulp.task('default', ['clean']);