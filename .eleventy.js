const yaml = require("js-yaml");
const csv = require("papaparse");
const Image = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
	
	eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
	eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));
	eleventyConfig.addDataExtension("csv",(contents) => 
		{
			// console.log(typeof(contents)); //content is a string
			let csvData;
			csv.parse(
				contents ,
				{
					// see https://www.papaparse.com/docs#config for detailed config options
					delimiter: ",",
					newline: "",// auto-detect
					quoteChar: '"',
					escapeChar: '\\',
					header: true,// maybe change to false for better performance ?
					encoding: "UTF-8",
					complete: ( result, file ) => {
						if (result.errors)
						{
							for ( let i=0 ; i < result.errors.length ; i++ )
							console.log(result.errors[i])
						}
						csvData = result.data;
					},
					error: ( error, file ) => { console.log(error) },
					download: false,
					skipEmptyLines: "greedy",
					fastMode: undefined, //Fast mode will automatically be enabled if no " characters appear in the input. 
				}
			);
			return csvData;
		}
	);

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
			Image(`./img${file}`, options);
			// get the metadata of the image even if the image generation is not finished yet
			let metadata = Image.statsSync(`./img${file}`, options );
			return {
				thumbnailUrl : metadata.jpeg[0].url,
				OGUrl : metadata.jpeg[1].url,
				heightRatio : Math.round(metadata.jpeg[0].height / metadata.jpeg[0].width * 100), // height is ??? percent of the width
				widthRatio : Math.round(metadata.jpeg[0].height / metadata.jpeg[0].width * 100) // width is ??? percent of the height
			}
		}
	);
	eleventyConfig.addJavaScriptFunction( "imgCopy", function( file )
		{
			let options = {width: [ null ], formats: [ null ], urlPath: "/img/", outputDir: "./_site/img/"}
			// generate a new jpeg image with 300px width and copy it and the og image to the /img/ folder
			Image(`./img${file}`, options);
			// get the metadata of the image even if the image generation is not finished yet
			let metadata = Image.statsSync(`./img${file}`, options );
			for (let file in metadata)
			{
				return { url : metadata[file][0].url} 
			}
		}
	);
};