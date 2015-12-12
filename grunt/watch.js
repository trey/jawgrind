module.exports = {
    options: {
        livereload: true,
    },
    html: {
        files: ['*.html', '*.php']
    },
    sass: {
        options: { livereload: false },
        files: ['css/**/*.scss'],
        tasks: ['sasslint', 'sass']
    },
    css: {
        files: ['css/build/**/*.css'],
        tasks: ['postcss']
    }
};
