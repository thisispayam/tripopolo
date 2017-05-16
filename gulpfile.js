var gulp = require('gulp');

var watch = require('gulp-watch');

//creating a default task

gulp.task('default', function(){
    console.log('we made a gulp task');
});


// a task to do somthing inside our HTML file (index.html)

gulp.task('html', function(){
     console.log('Imagine somthing useful being done to our html here')     
});


// a task to do somthing inside our CSS file (style.css)
gulp.task('styles',function(){
    console.log('Sass or PostCss tasks will run here');
})



// creating a watch task using gulp-watch plugin
gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html'); // watching for any change to our index.html
    });
});


gulp.task('watch', function(){
    watch('./app/assets/styles/**/*.css', function(){ // watch any folder or css file inside assets folder
        gulp.start('styles'); // watching for any change to our style css file
    });
});

