exports.render = function ( content, pagedata )
{
	let output = `
	<header class="header" ${content.id?'id="'+content.id+'"':''}>
		<a href="/"><img class="header__image" src="${content.logo != undefined ? this.imgCopy(content.logo).url : ''}"></a>
		<hr class="header__hr">
		<nav id="nav">
			<ul class="nav">`
	let i =0;
	while( Boolean(pagedata.menu[i]) )
	{
		output +=`
				<li class="nav__li">
					<div class="nav__li_background"></div>
					<a class="nav__li__a" href="/${pagedata.page.local}${pagedata.menu[i].href}">${pagedata.menu[i].name[pagedata.page.local]}</a>
				</li>`
		i++
	}
	output += `
			</ul>
		</nav>
		<div class="lang">
			<img class="lang__icon" src="${this.imgCopy('/lang.png').url}">
			<ul class="lang__menu">
				<a href="/en-GB/${pagedata.page.url.replace( /\/[a-z]{2}-[A-Z]{2}\// , '' )}"><li class="lang__menu__item">English</li></a>
				<a href="/fr-FR/${pagedata.page.url.replace( /\/[a-z]{2}-[A-Z]{2}\// , '' )}"><li class="lang__menu__item">Francais</li></a>
				<a href="/de-DE/${pagedata.page.url.replace( /\/[a-z]{2}-[A-Z]{2}\// , '' )}"><li class="lang__menu__item">Deutsch</li></a>
			</ul>
		</div>
	</header>`
	return output
}