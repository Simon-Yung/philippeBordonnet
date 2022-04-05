const yaml = require("js-yaml");
const Image = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
	
	eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
	eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

	//pass through copy for css javascript and internal images
	eleventyConfig.addPassthroughCopy({ "_includes/assets": "assets" });
	eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
	eleventyConfig.addPassthroughCopy({ "favicon.png": "favicon.png" });

	// eleventyConfig.addPassthroughCopy({ "img": "img" });

	// JavaScript Template Function
	eleventyConfig.addJavaScriptFunction( "imgCreate", function( file , width = 300 )
		{
			let options = {widths: [ width , null ], formats: [ "jpeg" ], urlPath: "/img/", outputDir: "./_site/img/"}
			// generate a new jpeg image with 300px width and copy it and the og image to the /img/ folder
			Image(`./img/${file}`, options);
			// get the metadata of the image even if the image generation is not finished yet
			let metadata = Image.statsSync(`./img/${file}`, options );
			return {
				thumbnailUrl : metadata.jpeg[0].url,
				OGUrl : metadata.jpeg[1].url,
				heightRatio : metadata.jpeg[0].height / metadata.jpeg[0].width * 100, // height is ??? percent of the width
				widthRatio : metadata.jpeg[0].height / metadata.jpeg[0].width * 100 // width is ??? percent of the height
			}
		}
	);
	eleventyConfig.addJavaScriptFunction( "imgCopy", function( file )
		{
			let options = { formats: [ "jpeg" ], urlPath: "/img/", outputDir: "./_site/img/"}
			// generate a new jpeg image with 300px width and copy it and the og image to the /img/ folder
			Image(`./img/${file}`, options);
			// get the metadata of the image even if the image generation is not finished yet
			let metadata = Image.statsSync(`./img/${file}`, options );
			return {
				url : metadata.jpeg[0].url
				// heightRatio : metadata.jpeg[0].height / metadata.jpeg[0].width * 100, // height is ??? percent of the width
				// widthRatio : metadata.jpeg[0].height / metadata.jpeg[0].width * 100 // width is ??? percent of the height
			}
		}
	);
};