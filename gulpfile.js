var syntax = "scss";

var gulp = require("gulp"),
    gutil = require("gulp-util"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    cleancss = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    autoprefixer = require("gulp-autoprefixer"),
    notify = require("gulp-notify");

gulp.task("browser-sync", () => {
    browserSync({
        server: {
            baseDir: "app"
        },
        notify: false
    });
});

gulp.task("styles", () => {
    return gulp
        .src("app/src/**/*." + syntax + "")
        .pipe(sass({
            outputStyle: "expand"
        }).on("error", notify.onError()))
        .pipe(autoprefixer(["last 15 versions"]))
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest("app/dist/css"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task("js", () => {
    return gulp
        .src(["app/src/lib/require.js"])
        .pipe(concat("scripts.min.js"))
        .pipe(gulp.dest("app/dist/js"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task("watch", ["styles", "js", "browser-sync"], () => {});

gulp.task("default", ["watch"]);