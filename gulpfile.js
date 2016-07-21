var _ = require('lodash'),
  gulp = require('gulp'),
  coffee = require('gulp-coffee'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  http = require('http'),
  connect = require('connect'),
  qunit = require('gulp-qunit'),
  paths = {
    scripts: ['src/**/*.coffee'],
    compiled: ['dist/src/**/*.js'],
    concat: ['libs/comscore/*.js', 'src/**/*.js'],
    tests: ['tests/**/*.coffee'],
    qunitHtml: ['tests/index.html'],
    demo: ['demo/*.html']
  };

function create_static_server () {
  var app = connect()
    .use(connect.static(__dirname));

  http.createServer(app).listen(3000);
  console.log('server running on localhost:3000');
}

gulp.task('concat', function() {
    gulp.src(paths.concat)
        .pipe(concat('videojs.comscore.js'))
        .pipe(gulp.dest('dist/src'));
});

// uglify (aka minify)
gulp.task('compress', function() {
  gulp.src(paths.compiled)
    .pipe(uglify({outSourceMap: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
  gulp.src(paths.compiled)
    .pipe(gulp.dest('dist'));

  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('libs/comscore/streamsense.min.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('qunit', function () {
  return gulp.src(paths.qunitHtml).pipe(qunit());
});

// recompile coffeescript files on change
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['test']);
  gulp.watch(paths.tests, ['test']);
});

// launch this repo as a server (port 3000)
gulp.task('serve', create_static_server);

// builds everything to the `dist` directory
gulp.task('build', ['concat', 'compress']);

// does a build and runs the qunit tests
gulp.task('test', ['build', 'qunit']);

// runs a build and launches a server
gulp.task('default', ['test', 'watch', 'serve']);
