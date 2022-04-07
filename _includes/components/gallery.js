var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section id="mainWork" class="textAndImage">
				<img id="preview" class="textAndImage__image" style="width: calc( ${content.default.imageWidth}% - 3rem );" src="${this.imgCopy(content.default.image).url}">

				<article class="textAndImage__description" style="width: calc( ${100 - content.default.imageWidth}% - 3rem );">
					<div id="title" class="textAndImage__banner"><h1>${content.default.title}</h1></div>
					<p>${content.default.description.replace(/\n/g,'<br>')}</p>
				</article>
			</section>
			<section class="grid">`
	let i = 0;
	while ( Boolean(pagedata.artworkCollections[content.collection][i]) )
	{
		let img = this.imgCreate(pagedata.artworkCollections[content.collection][i].image, 500);
		output += `
				<article class="grid__article"
				data-img-url="${img.OGUrl}" 
				data-img-width="${pagedata.artworkCollections[content.collection][i].imageWidth}"
				data_title="${pagedata.artworkCollections[content.collection][i].title}"
				data-description="${pagedata.artworkCollections[content.collection][i].longDescription.replace(/\\n/g,'<br>')}">
					<img class="grid__article__img" src="${img.thumbnailUrl}" 
					loading="lazy"
					_style="height:${img.heightRatio};Width:${img.widthRatio}">
					<strong>${pagedata.artworkCollections[content.collection][i].title}</strong>
					<p>${pagedata.artworkCollections[content.collection][i].shortDescription.replace(/\\n/g,'<br>')}</p>
				</article>`
		++i
	}
	output += `
			</section>`


return output;
}