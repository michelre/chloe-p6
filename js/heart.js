// eslint-disable-next-line no-undef
mainContainer.innerHTML +=`
<div class="heart">
	<div class="heart__number">12</div>
	<img class="heart__icon" alt="likes" src="img/heart.svg"></img>
</div>`;

const incrementHeart = () => {
	let value = document.querySelector(".heart__number").innerHTML;
	value++;
	document.querySelector(".heart__number").innerHTML = value;
};

document.querySelector(".heart__icon").addEventListener("click", incrementHeart);