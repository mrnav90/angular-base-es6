var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');
var htmlmin = require('gulp-htmlmin');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config');
var webpackDevConfig = require('./webpack-dev.config');

// Where our files are located
var jsFiles   = 'src/**/*.js';
var viewFiles = 'src/**/*.html';
var scssFiles = 'src/**/*.scss';

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
};


gulp.task('webpack', ['views'], function() {
  return gulp.src('./src/app.js')
     .pipe(webpackStream(webpackConfig))
     .pipe(gulp.dest('./build/'));
});

gulp.task('html', function() {
  return gulp.src('index.html')
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename('app.templates.js'))
      .pipe(gulp.dest('./src/'));
});

gulp.task('build', ['html', 'webpack'], function() {
  var html = gulp.src('build/index.html')
                 .pipe(htmlmin({collapseWhitespace: true}))
                 .pipe(gulp.dest('./dist/'));

  var js = gulp.src('build/main.js')
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));
  return merge(html,js);
});

gulp.task('css', function() {
  return gulp.src('./src/app.js')
     .pipe(webpackStream(webpackDevConfig))
     .on('error', interceptErrors)
     .pipe(gulp.dest('./build/'));
})

gulp.task('default', ['html', 'webpack'], function() {
  browserSync.init(['./build/**/**.**'], {
    server: './build',
    port: 8080,
    notify: false,
    ui: {
      port: 8081
    }
  });
  // new WebpackDevServer(webpack(webpackConfig)).listen(8080, "localhost");
  gulp.watch('index.html', ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(jsFiles, ['webpack']);
  gulp.watch(scssFiles, ['css']);
});
