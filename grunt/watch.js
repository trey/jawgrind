module.exports = {
    options: {
        livereload: true,
    },
    html: {
        files: ['public/*.html', 'public/*.php']
    },
    sass: {
        options: { livereload: false },
        files: ['public/css/**/*.scss'],
        tasks: ['sasslint', 'sass']
    },
    css: {
        files: ['public/css/build/**/*.css'],
        tasks: ['postcss']
    }
};
