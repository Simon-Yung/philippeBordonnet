var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section class="textAndImage" ${content.id?'id="'+content.id+'"':''}>
				<img alt="${content.banner}" class="textAndImage__image" style="width: calc( ${content.imageWidth}% - 3rem );" src="${this.imgCreate(content.image, 800).thumbnailUrl}">

				<article class="textAndImage__description" style="width: calc( ${100 - content.imageWidth}% - 3rem );">
					<div class="textAndImage__banner"><h1>${content.banner}</h1></div>
${md.render(content.text)}
				</article>
			</section>`

	return output;
}