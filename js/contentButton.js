export const createContentButton = () => {
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.innerHTML += `
	<button class="button button--content">Passer au contenu</button>`;

	window.addEventListener("scroll", scrollFunction);
	const contentButton = document.querySelector(".button--content");
	const scrollFunction = () => {
		if (document.body.scrollTop > 20) {
			contentButton.style.display = "block";
		} else {
			contentButton.style.display = "none";
		}
	};
	contentButton.addEventListener("click", topFunction);
	const topFunction = () => {
		document.body.scrollTop = 0;
	};
};
