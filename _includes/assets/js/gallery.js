document.addEventListener("DOMContentLoaded", () =>{
	init();
});
let body;
let modal;
let thumbImg;
let mainImg;
let sideText;
let banner;
let price;
let description;
let closeBtn;

function init()
{
	if ( !Boolean(document.getElementById('gallery')) ){ return 0 }
	body = document.querySelector('body');
	modal = document.getElementById('modal');
	thumbImg = document.getElementById('background');
	mainImg = document.getElementById('preview');
	mainImg.style.height = '97vh';
	sideText = document.getElementById('text');
	banner = document.getElementById('title');
	price = document.getElementById('price');
	description = document.getElementById('description');
	closeBtn = document.getElementById('close');

	let articles = document.getElementsByClassName('grid__article__img');
	for (i = 0; i < articles.length; i++)
	{
		articles[i].addEventListener('click' , openModal);
	}
	closeBtn.addEventListener('click' , closeModal);
	// text.addEventListener('pointerup' , closeModal);
	mainImg.addEventListener('click' , ModalZoom);
	thumbImg.addEventListener('click' , ModalZoom);
}

function openModal(e)
{
	let clickedImage = e.target.parentElement;
	body.style.overflow = 'hidden';
	modal.style.display = 'block';
	mainImg.src = clickedImage.dataset.imgUrl;
	thumbImg.src = clickedImage.dataset.thumbUrl;
	thumbImg.style.filter = 'blur(10px)';
	thumbImg.style.opacity = '1.0';
	mainImg.addEventListener( 'load' , 
		(e) => {
			thumbImg.style.filter = '';
			thumbImg.style.opacity = '0.0'} ,
		{once: true} )
	// background.addEventListener( 'load' , (e) => {e.target.style.filter = ''} , {once: true} )
	banner.innerHTML = clickedImage.dataset.title?clickedImage.dataset.title:'';
	price.innerHTML = clickedImage.dataset.price?clickedImage.dataset.price:'';
	description.innerHTML = clickedImage.dataset.desc?clickedImage.dataset.desc:'';
}
function closeModal(e)
{
	body.style.overflow = 'auto';
	modal.style.display = 'none';
	sideText.style.display = 'block';
	title.innerHTML = '';
	price.innerHTML = '';
	description.innerHTML = '';

	mainImg.src = '/';
	thumbImg.src = '/'

	mainImg.style.height = '97vh'
	thumbImg.style.height = '97vh';

	mainImg.style.width = 'auto';
	thumbImg.style.width = 'auto';

	mainImg.style.cursor = 'zoom-in';

	mainImg.style.objectPosition = 'center center';
	thumbImg.style.objectPosition = 'center center';

	mainImg.style.gridColumn = '1 / 2';
	thumbImg.style.gridColumn = '1 / 2';

	mainImg.style.objectFit = 'contain';
	thumbImg.style.objectFit = 'contain';
}
function ModalZoom()
{
	if (mainImg.style.height == '97vh')
	{
		sideText.style.display = 'none';
		mainImg.style.cursor = 'zoom-out';

		mainImg.style.height = 'auto';
		mainImg.style.width = '97vw';
		mainImg.style.gridColumn = '1 / 3';
		mainImg.style.objectPosition = 'center top';
		mainImg.style.objectFit = 'scale-down';

		thumbImg.style.height = 'auto';
		thumbImg.style.width = '97vw';
		thumbImg.style.gridColumn = '1 / 3';
		thumbImg.style.objectPosition = 'center top';
		thumbImg.style.objectFit = 'scale-down';
	}
	else
	{
		sideText.style.display = 'block';
		mainImg.style.cursor = 'zoom-in';

		mainImg.style.height = '97vh';
		mainImg.style.width = 'auto';
		mainImg.style.gridColumn = '1 / 2';
		mainImg.style.objectPosition = 'center center';
		mainImg.style.objectFit = 'contain';

		thumbImg.style.height = '97vh';
		thumbImg.style.width = 'auto';
		thumbImg.style.gridColumn = '1 / 2';
		thumbImg.style.objectPosition = 'center center';
		thumbImg.style.objectFit = 'contain';
	}
}