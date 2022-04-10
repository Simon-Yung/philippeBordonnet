document.addEventListener("DOMContentLoaded", () =>{
	init();
});
let body;
let modal;
let preview;
let background;
let title;
let description;
let text;
let price;
let closeBtn;
let modalContent;
let modalImage;

function init()
{
	if ( !Boolean(document.getElementById('gallery')) ){ return 0 }
	body = document.querySelector('body');
	modal = document.getElementById('modal');
	preview = document.getElementById('preview');
	text = document.getElementById('text');
	title = document.getElementById('title');
	price = document.getElementById('price');
	description = document.getElementById('description');
	closeBtn = document.getElementById('close');
	modalContent = document.getElementById('modalContent');
	background = document.getElementById('background');
	modalImage = document.getElementById('modal_image');

	//let articles = document.querySelectorAll('article');
	let articles = document.getElementsByClassName('grid__article__img');
	for (i = 0; i < articles.length; i++)
	{
		articles[i].addEventListener('pointerup' , openModal);
	}
	closeBtn.addEventListener('pointerup' , closeModal);
	text.addEventListener('pointerup' , closeModal);
	preview.addEventListener('pointerup' , ModalZoom);
}

function openModal(e)
{
	let dom = e.target.parentElement;
	// modalContent.style.maxHeight = '100%';
	modalImage.style.height = 'auto';
	body.style.overflow = 'hidden';
	modal.style.display = 'block';
	preview.src = dom.dataset.imgUrl;
	preview.style.opacity = '0.0';
	background.src = dom.dataset.thumbUrl;
	preview.addEventListener( 'load' , (e) => {e.target.style.opacity = '1.0'} , {once: true} )
	title.innerHTML = dom.dataset.title?dom.dataset.title:'';
	price.innerHTML = dom.dataset.price?dom.dataset.price:'';
	description.innerHTML = dom.dataset.desc?dom.dataset.desc:'';
}
function closeModal(e)
{
	body.style.overflow = 'auto';
	modal.style.display = 'none';
	preview.src = '/';
	preview.style.filter = '';
	title.innerHTML = '';
	price.innerHTML = '';
	description.innerHTML = '';

	modalImage.style.height = 'auto';

	// modalContent.style.maxHeight = '100%';
	preview.style.cursor = 'zoom-in';
	text.style.display = 'block';
	preview.style.objectPosition = 'center center';
	background.style.objectPosition = 'center center';
}
function ModalZoom()
{
	if (modalImage.style.height == 'auto')
	{
		// modalContent.style.maxHeight = '800%';
		modalImage.style.height = '175vh';
		preview.style.cursor = 'zoom-out';
		text.style.display = 'none';
		preview.style.objectPosition = 'center top';
		background.style.objectPosition = 'center top';
	}
	else
	{
		// modalContent.style.maxHeight = '100%';
		modalImage.style.height = 'auto';
		preview.style.cursor = 'zoom-in';
		text.style.display = 'block';
		preview.style.objectPosition = 'center center';
		background.style.objectPosition = 'center center';
	}
}