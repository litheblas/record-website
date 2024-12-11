module.exports = function(eleventyConfig) {

  // Ignore theese files/directories when generating output
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("_pages/ja");
 
  // Copy theese files/directories to output 
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("svg");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("manifest.json");
};
