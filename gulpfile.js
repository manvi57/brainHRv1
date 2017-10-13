var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['src/client/*/*.js','src/client/*.js','src/server/**/*.js'];
var allFiles = ['src/**/*.*'];

gulp.task('style', function(){
    return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish',{
        verbose: true
    }))
    .pipe(jscs());
});

gulp.task('default', ['style'], function(){
    var options = {
        script: 'src/server/app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: allFiles
    };

    return nodemon(options)
        .on('restart', function(ev){
            console.log('Restarting...');
            });
});
