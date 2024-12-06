document.addEventListener('DOMContentLoaded', function () {
	// Открытие и закрытие меню 
	const menuButton = document.getElementById('menuButton');
	const closeButton = document.getElementById('closeButton');
	const menu = document.getElementById('menu');

	menuButton.addEventListener('click', function () {
		menu.style.right = '0';  // Показываем меню 
	});

	closeButton.addEventListener('click', function () {
		menu.style.right = '-320px';  // Скрываем меню 
	});

	// Отправка сообщения через AJAX 
	document.getElementById('sendButton').addEventListener('click', function () {
		const messageContent = document.getElementById('messageText').value;

		if (!messageContent) {
			alert('Пожалуйста, введите сообщение');
			return;
		}

		// Отправка данных на сервер через AJAX 
		fetch('/send_message/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': getCookie('csrftoken')  // CSRF Token для безопасности 
			},
			body: JSON.stringify({ content: messageContent })
		})
			.then(response => response.json())
			.then(data => {
				if (data.status === 'success') {
					alert(data.message);
					document.getElementById('messageText').value = '';  // Очистка поля после отправки 
				} else {
					alert(data.message);
				}
			})
			.catch(error => {
				console.error('Ошибка:', error);
				alert('Произошла ошибка при отправке сообщения');
			});
	});

	// Функция для получения CSRF токена 
	function getCookie(name) {
		let cookieValue = null;
		if (document.cookie && document.cookie !== '') {
			const cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				if (cookie.substring(0, name.length + 1) === (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
});