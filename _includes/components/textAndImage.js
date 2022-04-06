var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section class="textAndImage" id="${content.id}">
				<div class="textAndImage__banner" style="left: calc( ${content.imageWidth}% - 6rem )"; max-width: calc( ${100 - content.imageWidth}% + 6rem );"><h1>${content.banner}</h1></div>
				<img class="textAndImage__image" style="width: calc( ${content.imageWidth}% - 3rem );" src="${this.imgCreate(content.image, 800).thumbnailUrl}" style="width: calc( 55% - 3rem );">

				<article class="textAndImage__description" style="width: calc( ${100 - content.imageWidth}% - 3rem );">
				${md.render(content.text)}
				</article>
			</section>`

	return output;
}