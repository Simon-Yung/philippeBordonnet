document.addEventListener("DOMContentLoaded", () =>{
	init();
});
let preview;
let title;
let description;
let text;

function init()
{
	if ( !Boolean(document.getElementById('gallery')) ){ return 0 }
	preview = document.getElementById('preview');
	preview.style.transition = '0.3s all ease 0.0s';
	text = document.getElementById('text');
	title = document.getElementById('title');
	description = document.getElementById('description');

	let articles = document.querySelectorAll('article');
	for (i = 0; i < articles.length; i++)
	{
		articles[i].addEventListener('pointerup' , updateImage);
	}
}

function updateImage(e)
{
	let dom = null;
	e.target.tagname == "ARTICLE" ? dom = e.target : dom = e.target.parentElement;
	preview.src = dom.dataset.imgUrl;
	preview.style.width = `calc( ${parseInt(dom.dataset.imgWidth)}% - 3rem )`;
	preview.style.filter = 'blur(5px) opacity(0.2)';
	preview.addEventListener( 'load' , (e) => {e.target.style.filter = 'blur(0px) opacity(1.0)'} , {once: true} )
	text.style.width = `calc( ${100 - parseInt(dom.dataset.imgWidth)}% - 3rem );`;
	title.innerHTML = dom.dataset.title;
	description.innerHTML = dom.dataset.description;
	window.scrollTo(0,0);
}