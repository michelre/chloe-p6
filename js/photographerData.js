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
}

export const createPhotographerTags = () => {
	const tagsPhotographer = document.querySelector(".photographer__tags");
	for (let i = 0; i < this.tags.length; i++)
		tagsPhotographer.innerHTML += `<span class="photographer__tags__tag">#${this.tag[i]}</span>`;
};

export const createPhotographerCard =() =>{
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.innerHTML +=`
	<article class="photographer">
		<a alt="${this.name}" href="photograph.html" class="photographer__link">
			<div class="photographer__picture">
				<img src="medias/thumbnails/${this.portrait}" alt="">
			</div>
			<h2 class="photographer__name">${this.name}</div>
		</a>
		<div class="photographer__location">${this.city}, ${this.country}</div>
		<div class="photographer__tagline">${this.tagline}</div>
		<div class="photographer__price">${this.price}</div>
		<div class="photographer__tags"></div>
	</article>`;
};

export const createPhotographerHeader =() =>{
	const mainContainer = document.querySelector(".mainContainer");
	mainContainer.innerHTML +=`
	<section class="photographer__header">
		<div class="photographer__description">			
			<h1 class="photographer__name">${this.name}</div>
			<div class="photographer__location">${this.city}, ${this.country}</div>
			<div class="photographer__tagline">${this.tagline}</div>
			<div class="photographer__tags"></div>
		</div>
		<div photographer__contact></div>
		<div class="photographer__picture">
			<img src="medias/thumbnails/${this.portrait}" alt="${this.name}">
		</div>
	</section>`;
};