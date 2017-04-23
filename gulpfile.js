const gulp = require('gulp');

const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const jsEntiries = {
	src: './src/client/',
	dest: './public/js/',
	files: [
		'bundle.js',
	]
};

gulp.task('js', () => {
	jsEntiries.files.forEach(entry => {
		var filepath = jsEntiries.src + entry;
		browserify(filepath, {
			debug: true,
			extensions: ['.js', '.jsx']
		})
		.transform(babelify, {
			presets: ['es2015', 'react']
		})
		.bundle()
		.on('error', err => {
			console.log(err.message);
			console.log(err.stack);
		})
		.pipe(source(entry))
		.pipe(buffer())
		.pipe(gulp.dest(jsEntiries.dest));
	});
});

gulp.task('default', () => {
	gulp.watch(jsEntiries.src + '**/*.*', ['js']);
});