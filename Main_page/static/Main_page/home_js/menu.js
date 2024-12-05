document.querySelector(".icon-menu").addEventListener("click", e => {
	e.stopPropagation()
	document.querySelector("._menu").classList.toggle("active")
})