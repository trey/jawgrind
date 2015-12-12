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
        cwd: 'css/build',
        src: ['*.css'],
        dest: 'css',
        ext: '.css'
    }
};
