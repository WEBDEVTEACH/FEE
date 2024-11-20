const url = 'https://purposebuiltsoftware.com/wp-content/uploads/2016/12/web-dev-student-illustration-Feature_1290x688_MS1.jpg';
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