const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

function buildHtml() {
    return src('src/**.html')
            .pipe(htmlmin({
                collapseWhitespace: true
            }))
            .pipe(dest('dist'))
}

function buildStyles() {
    return src('src/scss/**.scss')
            .pipe(sass())
            .pipe(concat('style.css'))
            .pipe(autoprefixer())
            .pipe(csso())
            .pipe(dest('dist/css'))  
}

function buildJs() {
    return src('src/js/**.js')
        .pipe(webpack({
            devtool: 'source-map',
            mode: 'production'
        }))
        .pipe(dest('dist/js'))
}

function moveImg() {
    return src('src/assets/img/*')
            .pipe(imagemin())
            .pipe(dest('dist/assets/img'))
}

function moveIcons() {
    return src('src/assets/icons/*')
            .pipe(imagemin())
            .pipe(dest('dist/assets/icons'))
}

function moveFavicons() {
    return src('src/assets/favicons/*')
            .pipe(imagemin())
            .pipe(dest('dist/assets/favicons'))
}

function moveFonts() {
    return src('src/assets/fonts/**')
            .pipe(dest('dist/assets/fonts'))
}

function clear() {
    return del('dist');
}

function serve() {
    browsersync({server: './dist'})

    watch('src/*/**.scss', buildStyles).on('change', browsersync.reload);
    watch('src/**.html', buildHtml).on('change', browsersync.reload);
    watch('src/js/**/**.js', buildJs).on('change', browsersync.reload);
    watch('src/assets/**', series(moveImg, moveIcons, moveFavicons, moveFonts)).on('change', browsersync.reload);
}

exports.build = series(clear, buildStyles, moveImg, moveIcons, moveFavicons, moveFonts, buildJs, buildHtml);
exports.serve = series(clear, buildStyles, moveImg, moveIcons, moveFavicons, moveFonts, buildJs, buildHtml, serve);
exports.clear = clear;