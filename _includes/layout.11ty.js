const components = require('./components/_components.js');

exports.data = {
	title: "default Title",
	baseHref: "",
	description: "",
	rating: "General"
};

exports.render = function(data)
{
	let langTag = null;
	switch ( data.page.url.substring(0, 7) )
	{
		case '/en-GB/' :
			data.page.local = 'en-GB';
			langTag = 'en-GB';
			break;
		case '/fr-FR/' :
			data.page.local = 'fr-FR';
			langTag = 'fr';
			break;
		case '/de-DE/' :
			data.page.local = 'de-DE';
			langTag = 'de';
			break;
		default :
			data.page.local = 'en-GB';
			break;
	}
	let renderedContent = `
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1"> <!-- Render Chrome if available or using latest version of Internet Explorer (Recommended). -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=auto">
		<title>${data.title}</title>
		<meta http-equiv="Content-Security-Policy" content="
			default-src 'self';
			img-src 'self' https://;
			script-src 'self';
			style-src 'self' 'unsafe-inline' *.googleapis.com *.gstatic.com/;
			font-src 'self' *.googleapis.com *.gstatic.com;
		">
		<!-- Base URL to use for all relative URLs contained within the document -->
		<!-- <base href="${data.baseHref}"> -->
		<!-- Geo Positioning Meta Tags. -->
		<!-- <meta name="geo.region" content=""> -->
		<!-- <meta name="geo.placename" content=""> -->
		<!-- Search Eengine and Browser Meta Tags. -->
		<!-- Keep under 500 characters -->
		<meta name="description" content="${data.description}">
		<!-- General, 14 Years, Mature or Restricted -->
		<meta name="rating" content="${data.rating}">
		<!-- Search engine robots Meta Tags. -->
		<meta name="robots" content="noindex, follow"> 
		<!-- Favicon Meta Tags. -->
		<link rel="icon" href="/favicon.ico">
		<link rel="icon" href="/favicon-32.png" type="image/png">
		
		<link rel="stylesheet" href="/assets/css/style.css">
		<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"> 
		<script src="/assets/js/gallery.js" defer></script>
	</head>
	<body class="body" ${langTag?'lang="' + langTag + '"':''}>`;

	let i = 0;
	while ( Boolean(data.sections[i]) )
	{
		try
		{
			renderedContent += components[data.sections[i].type].render.apply( this, [data.sections[i].content, data] )
		}
		catch (e)
		{
			renderedContent = renderedContent + `
		<!-- Component "${data.sections[i].type}" ran into some issue -->
		<!-- ${e} -->`;
		//console.error(e);
		}
		i++;
	}

	return renderedContent + `
	</body>
</html>

<!--   /|/|   (   -->
<!--  ('.')    )  -->
<!--   |   \\  /   -->
<!--   ||___)/    -->`;

};