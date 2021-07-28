export class Photographer {
	constructor(data) {
		this.name = data.name;
		this.city = data.city;
		this.country = data.country;
		this.id = data.id;
		this.portrait = data.portrait;
		this.price = data.price;
		this.tagline = data.tagline;
		this.tags = data.tags;
	}
	createPhotographerTags() {
		let tagsPhotographer = "";
		for (let i = 0; i < this.tags.length; i++) {
			return (tagsPhotographer += `<span class="photographer__tags__tag">#${this.tags[i]}</span>`);
		}
	}

	createPhotographerCard() {
		const mainContainer = document.querySelector(".mainContainer");
		mainContainer.innerHTML += `
	<article class="photographer">
		<a alt="${this.name}" href="photograph.html" class="photographer__link">
			<div class="photographer__picture">
				<img src="img/thumbnails/${this.portrait}" alt="">
			</div>
			<h2 class="photographer__name">${this.name}</h2>
		</a>
		<div class="photographer__location">${this.city}, ${this.country}</div>
		<div class="photographer__tagline">${this.tagline}</div>
		<div class="photographer__price">${this.price}€/jour</div>
		<div class="photographer__tags">${this.createPhotographerTags()}</div>
	</article>`;
	}

	createPhotographerHeader() {
		const mainContainer = document.querySelector(".mainContainer");
		mainContainer.innerHTML += `
	<section class="photographer__header">
		<div class="photographer__description">			
			<h1 class="photographer__name">${this.name}</div>
			<div class="photographer__location">${this.city}, ${this.country}</div>
			<div class="photographer__tagline">${this.tagline}</div>
			<div class="photographer__tags">${this.createPhotographerTags()}</div>
		</div>
		<div photographer__contact></div>
		<div class="photographer__picture">
			<img src="img/thumbnails/${this.portrait}" alt="${this.name}">
		</div>
	</section>`;
	}
}
