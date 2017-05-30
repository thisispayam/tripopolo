var gulp =          require('gulp'),
    watch =         require('gulp-watch'),
    browserSync =   require('browser-sync');

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
