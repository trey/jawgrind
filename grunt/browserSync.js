module.exports = {
    dev: {
        bsFiles: {
            src: 'css/**/*.css'
        },
        options: {
            watchTask: true,
            files: [
                '!css/build/**/*.css',
                'css/**/*.css',
                'js/**/*.js',
                '*.html'
            ],
            open: false,
            proxy: 'localhost:9000',
            notify: true,
            logLevel: 'silent',
            ghostMode: {
                clicks: true,
                scroll: true,
                links: true,
                forms: true
            }
        }
    }
};
