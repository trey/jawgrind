module.exports = {
    dist: {
        options: {
            outputStyle: 'nested'
        },
        files: [{
            expand: true,
            cwd: 'css/scss',
            src: ['*.scss'],
            dest: 'css/build',
            ext: '.css'
        }]
    }
};
