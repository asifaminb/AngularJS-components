var gulp = require('gulp');
var git = require('gulp-git');
var release = require('gulp-github-release');

gulp.task('add', function(){
    return gulp.src('./*')
        .pipe(git.add({args: '-f'}));
});


gulp.task('commit', function(){
    return gulp.src('./*')
        .pipe(git.commit('initial commit'));
});



// Tag the repo with a version
gulp.task('push', function(){
    git.push('origin', {args: ' --tags'}, function (err) {
        if (err) throw err;
    });
});
