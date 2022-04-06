const components = require('./components/_components.js');

exports.data = {
	title: "default Title",
	baseHref: "https://loremIpsum.com",	
	description: "",
	rating: "General",
	lang: "en-GB"

};

exports.render = function(data)
{
	let renderedContent = `
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge; chrome=1"> <!-- Render Chrome if available or using latest version of Internet Explorer (Recommended). -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=auto">
		<title>${data.title}</title>
		<meta http-equiv="Content-Security-Policy" content="
			default-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/ https://fonts.googleapis.com/css2?;
			img-src 'self' https://;
			script-src 'self';
			style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://fonts.gstatic.com/ https://fonts.googleapis.com/css2?;
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
		<meta name="robots" content="index, follow"> 
		<!-- Favicon Meta Tags. -->
		<link rel="icon" href="/favicon.ico">
		<link rel="icon" href="/favicon-32.png" type="image/png">
		
		<link rel="stylesheet" href="/assets/css/style.css">
		<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"> 
		<script src="/assets/js/???????????.js" defer></script>
	</head>
	<body class="body" lang="${data.lang}">`;

	let i = 0;
	while ( data.sections[i] != undefined )
	{
		try
		{
			renderedContent += components[data.sections[i].type].render.apply( this, [data.sections[i].content, data] )
		}
		catch (e)
		{
			renderedContent = renderedContent + `
		<!-- Component "${data.sections[i].name}" ran into some issue -->
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