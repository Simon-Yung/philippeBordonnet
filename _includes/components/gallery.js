var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section id="mainWork" class="textAndImage">
				<div id="title" class="textAndImage__banner" style="left: calc( ${content.default.imageWidth}% - 6rem ); max-width: calc( ${100 - content.default.imageWidth}% + 6rem );">
					<h1>${content.default.title}</h1>
				</div>
				<img id="preview" class="textAndImage__image" style="width: calc( ${content.default.imageWidth}% - 3rem );" src="${this.imgCopy(content.default.image).url}">

				<article class="textAndImage__description" style="width: calc( ${100 - content.default.imageWidth}% - 3rem );">
					<p>${content.default.description.replace(/\n/g,'<br>')}</p>
				</article>
			</section>
			<section class="grid">`
	let i = 0;
	while ( content.works[i] != undefined )
	{
		let img = this.imgCreate(content.works[i].image, 500);
		output += `
				<article 
				data-img-url="${img.OGUrl}" 
				data-img-width="${content.works[i].imageWidth}"
				data_title="${content.works[i].title}"
				data-description="${content.works[i].description.replace(/\n/g,'<br>')}">
					<a href="artist.html">
						<img src="${img.thumbnailUrl}" 
						loading="lazy"
						_style="height:${img.heightRatio};Width:${img.widthRatio}"
						></a>
					<a href="artist.html">
						<p><strong>${content.works[i].title}</strong><br>
						${content.works[i].previewText.replace(/\n/g,'<br>')}</p>
					</a>
				</article>`
		++i
	}
	output += `
			</section>`


return output;
}