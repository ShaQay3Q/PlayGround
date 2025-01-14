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

// CHALLANGE
const add = (n1, n2, cb) => {
	setTimeout(() => {
		cb(n1 + n2);
	}, 2000);
};

add(1, 4, (sum) => {
	console.log(sum); // Should print: 5
});
