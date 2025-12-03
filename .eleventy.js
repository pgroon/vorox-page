const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

module.exports = function(eleventyConfig) {
  const md = markdownIt({ html: true })
    .use(markdownItAttrs);

  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
