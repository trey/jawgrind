const pluginRss = require('@11ty/eleventy-plugin-rss');
const { DateTime } = require('luxon');
const markdownIt = require('markdown-it');
const markdownLib = markdownIt({ html: true, typographer: true });
const md = new markdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget('src/scss');
    eleventyConfig.setLibrary('md', markdownLib);
    eleventyConfig.addFilter('markdown', value => md.renderInline(value));
    eleventyConfig.addPassthroughCopy('src/img');
    eleventyConfig.addFilter('fullDate', dateObj => DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('cccc, LLLL d, yyyy'));
    eleventyConfig.addPlugin(pluginRss);

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
