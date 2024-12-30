// const square = function (number) {
// 	return number * number;
// };

// const square = (number) => number * number;

// console.log(square(3));

const event = {
	name: "Birthday Party",
	guestList: ["Sha", "Ali", "Sam", "Lovis", "Felix"],
	// printGuestList: function () {
	// 	console.log("Guest list for " + this.name);
	// },

	// arrow function doesn't have access to "this" as refrence to the actual object
	// printGuestList: () => console.log("Guest list for " + event.name),

	// we can shorten the
	printGuestList() {
		console.log("Guest list for " + this.name);
		// for (const guest of this.guestList) {
		// 	console.log(`${guest} is attending this ${this.name}`);
		// }
		this.guestList.forEach((guest) => {
			console.log(`${guest} is attending this ${this.name}`);
		});
	},
};

event.printGuestList();
