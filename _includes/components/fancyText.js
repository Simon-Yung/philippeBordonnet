var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section class="fancyText">
				<h1 class="fancyText__banner">${content.banner}</h1>
${md.render(content.text)}
			</section>`
	return output;
}

