// sort select HTML creation
// eslint-disable-next-line no-undef
mainContainer.innerHTML += `<div class="sort">
	<label for="order by" class="sort__label">Trier par</label>
	<select name="Order by" id="tri" class="button button--select">
		<option value="popularité">Popularité</option>
		<option value="date">Date</option>
		<option value="titre">Titre</option>
	</select>
	</div>`;

//const sortedMedias = media.slice().sort((a, b) => b.date - a.date)
