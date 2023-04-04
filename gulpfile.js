const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function cssSass() {
  return src('./sass/*.scss')
  .pipe(sass({ outputStyle: "expanded" }))
  .on('error', sass.logError)
  .pipe(dest('./css'));
}

function watchFileSass() {
  watch('./sass/*.scss', cssSass);
}

exports.default = watchFileSass;