var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');


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
     return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssvars, nested, autoprefixer])) //all the postcss plugins will go here
    .pipe(gulp.dest('./app/temp/styles')); //where the css file gets compiled
});



// creating a watch task using gulp-watch plugin
gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html'); // watching for any change to our index.html
    });
    
     watch('./app/assets/styles/**/*.css', function(){ // watch any folder or css file inside assets folder
        gulp.start('styles'); // watching for any change to our style css file
    });
});

