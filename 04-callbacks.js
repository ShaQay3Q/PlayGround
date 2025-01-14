setTimeout(() => {
	console.log("2 seconds are up!");
}, 2000);

const names = ["Shaghayegh", "Leandro", "Ensi"];
const shortNames = names.filter((name) => {
	return name.length < 5;
});

console.log(shortNames);

//  callback or cb is placeholder for a function
const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			lat: 0,
			long: 0,
		};
		callback(data);
	}, 2000);
};

geocode("Tehran", (data) => {
	console.log(data);
});
