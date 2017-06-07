var gulp =          require('gulp'),
    postcss =       require('gulp-postcss'),
    cssvars =       require('postcss-simple-vars'),
    nested =        require('postcss-nested'),
    cssImport =     require('postcss-import'),
    autoprefixer =  require('autoprefixer'),
    mixins=         require('postcss-mixins'),
    hexrgba=        require('postcss-hexrgba');

// a task to do somthing inside our CSS file (style.css)
gulp.task('styles',function(){
     return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])) //all the postcss plugins will go here
     .on('error', function(errorInfo){
         console.log(errorInfo.toString());
         this.emit('end');
     })
    .pipe(gulp.dest('./app/temp/styles')); //where the css file gets compiled
});