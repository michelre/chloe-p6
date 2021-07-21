// fetch data from json file
fetch("FishEyeData.json")
	.then(function (response) {
		console.log(response);
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		appendData(data.photographers);
	})
	.catch(function (err) {
		console.log(err);
	});

//DOM Elements
const photographersContainer = document.querySelector(".photographers");

//Element - Photographers description
const appendData = (foo) => {
	for (let i = 0; i < foo.length; i++) {
		const divPhotographer = document.createElement("div");
		divPhotographer.classList.add("photographer");
		photographersContainer.appendChild(divPhotographer);

		const namePhotographer = document.createElement("div");
		namePhotographer.classList.add("photographer__name");
		divPhotographer.appendChild(namePhotographer);
		namePhotographer.textContent = foo[i].name;

		const locationPhotographer = document.createElement("div");
		locationPhotographer.classList.add("photographer__location");
		divPhotographer.appendChild(locationPhotographer);
		locationPhotographer.textContent = foo[i].city + ", " + foo[i].country;

		const quotePhotographer = document.createElement("div");
		quotePhotographer.classList.add("photographer__tagline");
		divPhotographer.appendChild(quotePhotographer);
		quotePhotographer.textContent = foo[i].tagline;

		const tagPhotographer = document.createElement("span");
		tagPhotographer.classList.add("photographer__tag");
		divPhotographer.appendChild(tagPhotographer);
		tagPhotographer.textContent = foo[i].tags;
	}
};

//Element - Photographers picture
//Element - Photographers cards
//Element - tag
//Element - heart
const heartIcon = document.createElement("img");
heartIcon.classList.add("heart__icon");
heartIcon.alt = "likes";

const heartCompteur = document.createElement("div");
heartCompteur.classList.add("heart__number");
heartCompteur.textContent = 12;

const heartContainer = document.createElement("div");
heartContainer.classList.add("heart");
photographersContainer.appendChild(heartContainer).appendChild(heartCompteur);
heartContainer.appendChild(heartIcon);
heartIcon.src = "img/heart.svg";

const incrementHeart = () => {
	let value = document.querySelector(".heart__number").innerHTML;
	value++;
	document.querySelector(".heart__number").innerHTML = value;
};

document.querySelector(".heart__icon").addEventListener("click", incrementHeart);

//Element - media
//Element - Photographer header
