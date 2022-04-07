var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section class="hr">
				<hr class="hr__line">`
	if ( Boolean(content.href) && Boolean(content.text) )
	{
	output +=`
			<a href="${content.href}">
				<span class="hr__link">
					${content.text}
				</span>
			</a>`
	}
	else if ( Boolean(content.text) )
	{
		output +=`
		<span class="hr__text">
			${content.text}
		</span>`
	}
	output +=`
			</section>`
	return output;
}