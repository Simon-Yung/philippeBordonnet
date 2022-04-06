var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section class="textAndImage" id="">
				<div class="textAndImage__banner"><h1>${content.banner}</h1></div>
				<img class="textAndImage__image" src="${this.imgCreate(content.image, 800).thumbnailUrl}" style="width: calc( 55% - 3rem );">

				<article class="textAndImage__description" style="width: calc( 45% - 3rem );">
				${md.render(content.text)}
				</article>
			</section>`

	return output;
}