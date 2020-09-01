// 获取gulp
var gulp = require('gulp');
// 获取minify-css模块(用于压缩css)
var minifyCSS = require('gulp-minify-css');
// 获取 gulp-uglify 模块 (用于压缩JS)
var minifyJS = require('gulp-uglify');
// 获取 gulp-concat 模块，（多个文件合并为一个）
var concat = require('gulp-concat');
// 获取 gulp-rev 模块（对文件名加MD5后缀，去缓存）
var rev = require('gulp-rev')
// 获取 gulp-less 对less编译的模块
var less = require('gulp-less');
// 获取 gulp-smushit 图片压缩模块
var smushit = require('gulp-smushit');

// 压缩CSS
gulp.task('handleCSS', function () {
	// 找到文件, 需要处理的css文件，放到一个字符串换数组里
	gulp.src(['src/*.css', 'src/*.less'])
	// 合并后的文件
	.pipe(concat('style.min.less'))
	// 编译less
	.pipe(less())
	// 处理完输出到css目录
	.pipe(gulp.dest('src/'))
	// 压缩文件
	.pipe(minifyCSS())
	// 文件名加MD5后缀
	.pipe(rev())
	// 最终吐出到dist目录
	.pipe(gulp.dest('dist/')); //最后吐出到dist目录
})
// 压缩JS
gulp.task('miniJS', function () {
	// 找到文件
	gulp.src(['src/jquery-3.3.js'])
	// 合并后的文件名
	.pipe(concat('alljs.min.js'))
	// 压缩文件
	.pipe(minifyJS())
	// 文件名加MD5，去缓存
	.pipe(rev())
	// 3、另存为压缩文件
	.pipe(gulp.dest('dist/js'))
})
// 压缩图片
gulp.task('handleimg', function () {
	return gulp.src('src/image/*')
	.pipe(smushit({
		verbose: true
	}))
	.pipe(gulp.dest('dist/image/'));
})

gulp.task('default', ['handleCSS', 'miniJS','handleimg']);
