var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section _id="gallery" class="textAndImage">
				<img _id="preview" class="textAndImage__image" style="width: calc( ${content.default.imageWidth}% - 3rem );" src="${this.imgCopy(content.default.image).url}">

				<article _id="text" class="textAndImage__description" style="width: calc( ${100 - content.default.imageWidth}% - 3rem );">
					<div class="textAndImage__banner"><h1 _id="title" style="font-size:2rem">${content.default.title}</h1></div>
					<h3 _id="price"></h3>
					<p _id="description" style="line-height:2.0">${content.default.description.replace(/(\r\n|\r|\n)/g,'<br>')}</p>
				</article>
			</section>
			<section class="grid" id="gallery">`
	let i = 0;
	let quickDesc = '';
	switch ( pagedata.page.local )
	{
		case 'en-GB' :
			quickDesc = 'Work Hand-signed by the Artist<br>Certificate of Authenticity';
			break;
		case 'fr-FR' :
			quickDesc = 'Oeuvre signée à la main par l\'Artiste<br>Avec Certificat d\'Authenticité';
			break;
		case 'de-DE' :
			quickDesc = 'Handsigniert vom künstler<br>Echtheitsbescheinigung';
			break;
		default :
			quickDesc = 'Work Hand-signed by the Artist<br>Certificate of Authenticity';
			break;
	}
	while ( Boolean(pagedata.artworkCollections[content.collection][i]) )
	{
		let currentWork = pagedata.artworkCollections[content.collection][i];
		let img = this.imgCreate(currentWork.image, 500);
		output += `
				<article class="grid__article"
				data-thumb-url="${img.thumbnailUrl}"
				data-img-url="${img.OGUrl}"
				data-img-width="${currentWork.imageWidth?currentWork.imageWidth:'60'}"
				data-title="${currentWork.title?currentWork.title:''}"
				data-dimmensions="${currentWork.dimmensions?currentWork.dimmensions:''}"
				data-year="${currentWork.year?currentWork.year:''}"
				data-price="${currentWork.price?currentWork.price:''}"
				data-desc="${currentWork.description[pagedata.page.local]?currentWork.description[pagedata.page.local].replace(/(\r\n|\r|\n)/g,'<br>'):''}">
					<img class="grid__article__img" src="${img.thumbnailUrl}" 
					loading="lazy"
					style="aspect-ratio: 100/${img.heightRatio}">
					<strong>${currentWork.title}</strong>
					<p>
					${currentWork.dimmensions}<br>
					Created in ${currentWork.year}<br>
					${quickDesc}</p>
					<!-- <p>
					${currentWork.year?currentWork.year:''} <br> ${currentWork.dimmensions?currentWork.dimmensions:''}</p> -->
				</article>`
		++i
	}
	output += `
			</section>
			<modal-window id="modal" class="modal">
				<modal-content id="modalContent" class="modal__content">
					<button id="close" class="modal__button"><img class="modal__button__img" src="/assets/img/close.png"></button>
					<img id="preview" class="modal__image">

					<article id="text" class="textAndImage__description modal__description">
						<div class="textAndImage__banner"><h1 id="title" style="font-size:2rem">${content.default.title}</h1></div>
						<h3 id="price"></h3>
						<p id="description" style="line-height:2.0"></p>
					</article>
				</modal-content>
			</modal-window>`


return output;
}