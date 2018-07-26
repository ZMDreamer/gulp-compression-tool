var gulp = require('gulp');
var gulp_uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task("letao",()=>{
    gulp.src(['./js/common.js','./js/mui.min.js','./js/zepto.min.js'])
    .pipe(concat('index.js'))
    .pipe(gulp_uglify())
    .pipe(gulp.dest('./dist'))
})