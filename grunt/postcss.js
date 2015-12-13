module.exports = {
    options: {
        map: { inline: true },
        processors: [
            require('autoprefixer')(
                { browsers: ['last 2 versions', 'ie 10', 'ie 11'] }
            ),
        ]
    },
    target: {
        expand: true,
        cwd: 'public/css/build',
        src: ['*.css'],
        dest: 'public/css',
        ext: '.css'
    }
};
