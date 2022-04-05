const components = require('./components/_components.js');

exports.data = {
	title: "default Title"
};

exports.render = function(data)
{
	let renderedContent = `
<!doctype html>
<html lang="?????">
	<head>
		<meta charset="utf-8">
		<title>${data.title}</title>
		<link rel="stylesheet" href="/assets/css/styles.css">
		<link href="https://fonts.googleapis.com/css2?family=????????????0&display=swap" rel="stylesheet">
		<script src="/assets/js/???????????.js" defer></script>
	</head>
	<body>`;

	let i = 0;
	while ( data.sections[i] != undefined )
	{
		try
		{
			renderedContent += components[data.sections[i].name].render( data.sections[i].content , this )
		}
		catch (e)
		{
			renderedContent = renderedContent + `
		<!-- Component "${data.sections[i].name}" ran into some issue -->
		<!-- ${e} -->`;
		console.error(e);
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