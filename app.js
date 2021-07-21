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
const wrapper = document.querySelector("#js_Data");

//Header
const imgLogo = document.createElement("img");
const linkLogo = document.createElement("a");
const header = document.createElement("header");
wrapper.appendChild(header).appendChild(linkLogo).appendChild(imgLogo);
imgLogo.src = "img/logo.svg";
imgLogo.alt = "Fisheye Home page";
linkLogo.href = "index.html";

//Nav
const nav = document.createElement("nav");
header.appendChild(nav);

//Main
const mainContainer = document.createElement("main");
wrapper.appendChild(mainContainer);

//Div photographers
const photographerContainer = document.createElement("div");
photographerContainer.classList.add("photographers");
mainContainer.appendChild(photographerContainer);

//Element - Photographers description
const appendData = (foo) => {
	for (let i = 0; i < foo.length; i++) {
		const divPhotographer = document.createElement("div");
		divPhotographer.classList.add("photographer");
		photographerContainer.appendChild(divPhotographer);

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
mainContainer.appendChild(heartContainer).appendChild(heartCompteur);
heartContainer.appendChild(heartIcon);
heartIcon.src = "img/heart.svg";

const incrementHeart = () => {
	let value = document.querySelector(".heart__number").innerHTML;
	value++;
	document.querySelector(".heart__number").innerHTML = value;
};

document.querySelector(".heart__icon").addEventListener("click", incrementHeart);

//Element - dropdown
const divSelect = document.createElement("div");
divSelect.classList.add("select");
divSelect.innerHTML =
	"<label for='order by' class='select__label'>Trier par</label> <select name='Order by' id='tri' class='button button--select'> <option value='popularité'>Popularité</option> <option value='date'>Date</option><option value='titre'>Titre</option>";
mainContainer.appendChild(divSelect);

//Element - content button
const contentButton = document.createElement("button");
contentButton.classList.add("button--content");
contentButton.classList.add("button");
mainContainer.appendChild(contentButton);
contentButton.textContent = "Passer au contenu";

//Element - contact button
const contactButton = document.createElement("button");
contactButton.classList.add("button--contact");
contactButton.classList.add("button");
mainContainer.appendChild(contactButton);
contactButton.textContent = "Contactez moi";

//Element - form modal
//Element - media
//Element - Photographer header
