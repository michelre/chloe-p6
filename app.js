// fetch data from json file
fetch("FishEyeData.json")
	.then(function (response) {
		console.log(response);
		return response.json();
	})
	.then(function (data) {
		console.log(data);
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

//Element - content button
const contentButton = document.createElement("button");
contentButton.classList.add("button--content");
contentButton.classList.add("button");
mainContainer.appendChild(contentButton);
contentButton.textContent = "Passer au contenu";
