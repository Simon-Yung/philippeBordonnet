exports.render = function ( content, pagedata )
{
	let output = `
	<header class="header" ${content.id?'id="'+content.id+'"':''}>
		<a href=""><img class="header__image" src="${content.logo != undefined ? this.imgCopy(content.logo).url : ''}"></a>
		<hr class="header__hr">
		<nav id="nav">
			<ul class="nav">`
	let i =0;
	while(pagedata.menu[i] != undefined)
	{
		output +=`
				<li class="nav__li">
					<div class="nav__li_background"></div>
					<a class="nav__li__a" href="${pagedata.menu[i].href}">${pagedata.menu[i].name}</a>
				</li>`
		i++
	}
	output += `
			</ul>
		</nav>
	</header>`
	return output
}