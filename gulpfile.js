const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postCss = require('gulp-postcss');
const cssNano = require('cssnano');
const prefix = require('autoprefixer');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const imgMinify = require('gulp-imagemin');
const imgWebp = require('gulp-webp');
const browserSync = require('browser-sync').create();

const SASS_PATH = 'src/sass/**/*.sass'; 
const JS_PATH = 'src/js/**/*.js'; 
const IMG_PATH = 'src/images/*.{jpg,png}'; 
const WEBP_PATH = 'public/images/*.{jpg,png}'; 

// compile sass & minify task
function sassMin() {
    return src(SASS_PATH)
        .pipe(sass().on('error', sass.logError))
        .pipe(postCss([prefix('last 2 versions'), cssNano()]))
        .pipe(concat('main.min.css'))
        .pipe(dest('public/css'))
        .pipe(browserSync.stream());
}

// minify js task
function jsMin() {
    return src(JS_PATH)
        .pipe(terser())
        .pipe(dest('public/js'));
}

// minify images task
function imgMin() {
    return src(IMG_PATH)
        .pipe(imgMinify([
            imgMinify.mozjpeg({ quality: 80, progressive: true }),
            imgMinify.optipng({ optiminzationLevel: 2 }),
        ]))
        .pipe(dest('public/images'));
}

// create webp images task
function webpImg() { 
    return src('public/images/*.{jpg, png}')
        .pipe(imgWebp())
        .pipe(dest('public/images'));
}

// browser-sync task
function watchTask() {
    browserSync.init({
        server: { baseDir: './' }
    });
    watch('*.html').on('change', browserSync.reload)
    watch(SASS_PATH, sassMin);
    watch(JS_PATH, jsMin);
    watch(IMG_PATH, imgMin);
    watch(WEBP_PATH, webpImg);
}

// default gulp task
exports.default = series(
    sassMin,
    jsMin,
    imgMin,
    webpImg,
    watchTask,
);