import { Photographer } from "./js/photographerData.js";

// fetch data from json file
fetch("FishEyeData.json")
	.then(function (response) {
		console.log(response);
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		for (let i = 0; i < data.photographers.length; i++) {
			const photographer = new Photographer(data.photographers[i]);
			photographer.createPhotographerTags();
			photographer.createPhotographerCard();
		}
	})
	.catch(function (err) {
		console.log(err);
	});
