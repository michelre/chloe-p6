// fetch data from json file
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
		appendData(data.photographers);
	})
	.catch(function (err) {
		console.log(err);
	});

function appendData(foo) {
	var mainContainer = document.getElementById("js_Data");
	for (var i = 0; i < foo.length; i++) {
		var div = document.createElement("div");
		div.innerHTML = foo[i].name;
		mainContainer.appendChild(div);
	}
}
