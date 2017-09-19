/**
 * @authors Your Name (you@example.org)
 * @date    2016-11-07 16:06:02
 * @version $Id$
 */
var gulp = require('gulp');
var less=require('gulp-less');
var fileinclude=require("gulp-file-include");

gulp.task('less',function(){
    gulp.src('./imestatichtml/less/*.less').pipe(less()).pipe(gulp.dest('./imestatichtml/css'))
    })



gulp.task('fileinclude', function() {
    gulp.src('./imestatichtml/layout/imeWeb.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest(''));
    gulp.src('./imestatichtml/layout/startabout.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('./imestatichtml/'));

     gulp.src('./imestatichtml/layout/PDF.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('./imestatichtml/'));

     gulp.src('./imestatichtml/layout/price.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('./imestatichtml/'));

     gulp.src('./imestatichtml/layout/contactus.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('./imestatichtml/'));

    gulp.src('./imestatichtml/layout/imeprotocol.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('./imestatichtml/'));
});

gulp.task('default', function(){
    gulp.run('less');
    gulp.watch('./imestatichtml/less/*.less', function(){
        gulp.run('less');
    });
    /*gulp.watch('./imestatichtml/layout/*.html', function(){
        gulp.run('fileinclude');
    });*/
});
