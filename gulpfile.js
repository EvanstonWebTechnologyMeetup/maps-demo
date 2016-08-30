var gulp = require('gulp');
var express = require('express');

// TODO: Add watch & autorefresh

gulp.task('server', function() {
  var app = express();
  app.use(express["static"]('public'));
  app.listen(8080);
});

gulp.task('default', ['server']);
