const url = 'https://i.ibb.co/GRf91JP/WEBDEVTEACH.png';
const button = document.querySelector('button')
const img = document.querySelector('.img')
const cont = document.querySelector('.cont')


button.addEventListener('click', function() {
	cont.classList.toggle('active')
	setTimeout(function() {
		img.src = url;
		cont.classList.toggle('active')
	}, 2000)
})
