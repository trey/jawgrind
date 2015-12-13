module.exports = {
    dev: {
        bsFiles: {
            src: 'public/css/**/*.css'
        },
        options: {
            watchTask: true,
            files: [
                '!public/css/build/**/*.css',
                'public/css/**/*.css',
                'public/js/**/*.js',
                'public/*.html',
                'public/*.php'
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
