exports.render = function ( content , context )
{
	let output = `
	<section class="landing__background" style="background-image: url('${context.imgCopy(content.background).url}');">
		<div class="landing__content">
			<h1 class="landing__content__title">${content.title}</h1>
			<div class="landing__content__description">
				<span class="landing__content__description__text">${content.subTitle}</span>`;
	let i = 0;
	while (content.button[i] != undefined)
	{
		output += `
				<a href="${content.button[i].href}" class="landing__content__description__callToAction">${content.button[i].text}</a>`;
		i++;
	}
	output +=`
			</div>
		</div>
	</section>`;

	return output;
}