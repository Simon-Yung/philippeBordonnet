exports.render = function ( content , context )
{
	let output = `
	<section class="header" style="background-image: url('${context.imgCopy(content.background).url}');">
		<div class="header__frame">
			<h1 class="header__title">${content.title}</h1>
			<div class="header__subTitle">
				<p class="header__description">${content.subTitle}</p>`;
	let i = 0;
	while (content.button[i] != undefined)
	{
		output += `
				<a href="${content.button[i].href}" class="header__callToAction">${content.button[i].text}</a>`;
		i++;
	}
	output +=`
			</div>
		</div>
	</section>`;

	return output;
}