const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");

function comprimeImages() {
    return gulp
        .src("./src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}


function comprimeJavascript() {
    return gulp
        .src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts"));
}


function compilaSass() {
    return gulp
        .src("./src/styles/*.scss")
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "compressed",
            }).on("error",sass.logError)
        )
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./dist/styles"));
}


function comprimeHtml() {
    return gulp
        .src("*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./dist/html"));
}


exports.default = gulp.parallel(
    compilaSass,
    comprimeImages,
    comprimeJavascript,
    comprimeHtml
);