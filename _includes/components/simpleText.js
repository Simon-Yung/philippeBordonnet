var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section class="simpleText">
				${md.render(content.text)}
			</section>`;
	return output;
}