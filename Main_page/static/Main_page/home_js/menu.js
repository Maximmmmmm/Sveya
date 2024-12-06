document.querySelector(".icon-menu").addEventListener("click", e => {
	e.stopPropagation()
	document.querySelector("._menu").classList.toggle("active")
	document.body.classList.toggle("menu-active")
	if (e.target.classList.contains("icon-menu")) {
		e.target.classList.toggle("btn-active")
	} else {
		e.target.closest(".icon-menu").classList.toggle("btn-active")
	}
})