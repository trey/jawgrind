module.exports = {
    dist: {
        options: {
            outputStyle: 'nested'
        },
        files: [{
            expand: true,
            cwd: 'public/css/scss',
            src: ['*.scss'],
            dest: 'public/css/build',
            ext: '.css'
        }]
    }
};
