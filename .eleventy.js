// const Image = require("@11ty/eleventy-img");
const yaml = require("js-yaml");

module.exports = (eleventyConfig) => {
	
	eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
	eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

	//pass through copy for css javascript and internal images
	eleventyConfig.addPassthroughCopy({ "_includes/assets": "assets" });
	eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
	eleventyConfig.addPassthroughCopy({ "favicon.png": "favicon.png" });

	// eleventyConfig.addPassthroughCopy({ "img": "img" });


};