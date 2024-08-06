const searchBtn = document.querySelector(".nav__search-btn");
const input = document.querySelector(".nav__input");

const showInput = () => {
	searchBtn.addEventListener("click", () => {
		input.classList.add("nav__input_visible");
	});
};

showInput();
