var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<section class="collapsibleText">
				<details class="collapsibleText__content">
					<summary class="collapsibleText__content__text">
${md.render(content.text)}
						<div class="collapsibleText__fading"></div>
						<div class="moreOrLess"><span class="more">▼ Show More ...</span><span class="less">▲ Show Less ...</span></div>
					</summary>
				</details>
			</section>`
	return output;
}