var gulp =          require('gulp'),
    watch =         require('gulp-watch'),
    postcss =       require('gulp-postcss'),
    cssvars =       require('postcss-simple-vars'),
    nested =        require('postcss-nested'),
    cssImport =     require('postcss-import'),
    browserSync =   require('browser-sync'),
    autoprefixer =  require('autoprefixer');


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
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //all the postcss plugins will go here
    .pipe(gulp.dest('./app/temp/styles')); //where the css file gets compiled
});



// creating a watch task using gulp-watch plugin
gulp.task('watch', function(){
    browserSync.init({
        notify:false,
        server: {
            baseDir: "app" // where our index.html is
        }
    });
    watch('./app/index.html', function(){
        browserSync.reload(); // watching for any change to our index.html and reload on save
    });
    
     watch('./app/assets/styles/**/*.css', function(){ // watch any folder or css file inside assets folder
        gulp.start('cssInject'); // watching for any change to our style css file
    });
});


//creating a task for CSS injection

gulp.task('cssInject',['styles'], function(){ // It first begin any dependency task (styles),before runing (cssInject). 
   return gulp.src('./app/temp/styles/style.css')
   .pipe(browserSync.stream());
}); 
