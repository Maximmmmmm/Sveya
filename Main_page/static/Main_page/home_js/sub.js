// Получаем элементы 
const openBtn = document.getElementById('openBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Открытие окна 
openBtn.addEventListener('click', function () {
	document.body.classList.add("menu-active")
	popup.style.display = 'block';
});

// Закрытие окна при нажатии на крестик 
closeBtn.addEventListener('click', function () {
	document.body.classList.remove("menu-active")
	popup.style.display = 'none';
});

window.addEventListener('click', function (event) {
	if (event.target === popup) {
		document.body.classList.remove("menu-active")
		popup.style.display = 'none';
	}
});