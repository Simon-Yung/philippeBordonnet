document.addEventListener("DOMContentLoaded", () =>{
	init();
});
let preview;
let title;
let description;
let text;
let price;

function init()
{
	if ( !Boolean(document.getElementById('gallery')) ){ return 0 }
	preview = document.getElementById('preview');
	preview.style.transition = '0.3s all ease 0.0s';
	text = document.getElementById('text');
	title = document.getElementById('title');
	price = document.getElementById('price');
	description = document.getElementById('description');

	//let articles = document.querySelectorAll('article');
	let articles = document.getElementsByClassName('grid__article__img');
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
	preview.style.filter = 'blur(5px) opacity(0.2) brightness(0.0)';
	preview.addEventListener( 'load' , (e) => {e.target.style.filter = 'blur(0px) opacity(1.0) brightness(1.0)'} , {once: true} )
	text.style.width = `calc( ${100 - parseInt(dom.dataset.imgWidth)}% - 3rem );`;
	title.innerHTML = dom.dataset.title?dom.dataset.title:'';
	price.innerHTML = dom.dataset.price?dom.dataset.price:'';
	description.innerHTML = dom.dataset.desc?dom.dataset.desc:'';
	window.scrollTo(0,0);
}