
burgerBtn = document.querySelector('.burger-btn')
closeBtn = document.querySelector('.close-btn')
menu = document.querySelector('.adaptive-menu')

burgerBtn.addEventListener('click', function(e){

	e.preventDefault();
	menu.classList.toggle('switch')
})

closeBtn.addEventListener('click', function(e){

	e.preventDefault()
	menu.classList.toggle('switch')
})

