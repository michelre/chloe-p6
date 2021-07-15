fetch("FishEyeData.json")
	.then(function (response) {
	/*		if (!response.ok) {
			throw new Error("HTTP error " + response.status);
		}
	*/
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	})
	.catch(function (err) {
		console.log(err);
	});
