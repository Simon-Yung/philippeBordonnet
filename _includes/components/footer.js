var md = require('markdown-it')();

exports.render = function ( content, pagedata )
{
	let output = `
			<footer class="footer">
				<div class="footer__top">
					<hr class="footer__top__hr footer__top__hr--left">`;
	let i = 0;
	while ( pagedata.social[i] != undefined )
	{
		output += `
					<a href="${pagedata.social[i].href}"><img class="footer__top__img" src="${this.imgCopy(pagedata.social[i].icon).url}"></a>`
		i++;
	}
	output += `
					<hr class="footer__top__hr footer__top__hr--right">
				</div>
				<div class="footer__body">
					<section class="footer__body__info">
		
					${md.render(pagedata.footer.generalInfo)}
		
					</section>
					<section class="footer__body__link">
						<h3>Site Map :</h3>
						<ul>`
	i = 0;
	while ( pagedata.menu[i] != undefined )
	{
		output += `
						<li><a href="${pagedata.menu[i].href}">${pagedata.menu[i].name}</a></li>`
		i++;
	}
	output += `
						</ul>
					</section>
					<section class="footer__body__link">

					${md.render(pagedata.footer.miscInfo)}

					</section>
				</div>
			</footer>`
	return output;
}