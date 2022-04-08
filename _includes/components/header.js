exports.render = function ( content, pagedata )
{
	let output = `
	<header class="header" ${content.id?'id="'+content.id+'"':''}>
		<a href="/"><img class="header__image" src="${content.logo != undefined ? this.imgCopy(content.logo).url : ''}"></a>
		<hr class="header__hr">
		<nav id="nav">
			<ul class="nav">`
	let i =0;
	let lang = '';
	let langHref = '';
	switch ( pagedata.page.url.substring(6, 8) )
	{
		case 'en' :
			lang = 'en';
			langHref = '';
			break;
		case 'fr' :
			lang = 'fr';
			langHref = '/lang=fr';
			break;
		case 'de' :
			lang = 'de';
			langHref = '/lang=de';
			break;
		default :
			lang = 'en';
			langHref = '';
			break;
	}
	while(pagedata.menu[i] != undefined)
	{
		output +=`
				<li class="nav__li">
					<div class="nav__li_background"></div>
					<a class="nav__li__a" href="${langHref}${pagedata.menu[i].href}">${pagedata.menu[i].name[lang]}</a>
				</li>`
		i++
	}
	output += `
			</ul>
		</nav>
		<div class="lang">
			<img class="lang__icon" src="${this.imgCopy('/lang.png').url}">
			<ul class="lang__menu">
				<a href="${pagedata.page.url.replace( /\/lang=([a-z]|-)*/i , '' )}"><li class="lang__menu__item">English</li></a>
				<a href="/lang=fr${pagedata.page.url.replace( /\/lang=([a-z]|-)*/i , '' )}"><li class="lang__menu__item">Francais</li></a>
				<a href="/lang=de${pagedata.page.url.replace( /\/lang=([a-z]|-)*/i , '' )}"><li class="lang__menu__item">Deutsch</li></a>
			</ul>
		</div>
	</header>`
	return output
}