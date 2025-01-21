const http = require("node:http");

const url =
	"http://api.weatherapi.com/v1/current.json?key=a150a97e684d45b2860115533251201&q=51.300,12.33";

//! return value for request()
const request = http.request(url, (response) => {
	console.log("begin!");

	let data = "";
	// allow us to register a handler => like listiners for DOM
	//! data => event name
	response.on("data", (chunckOfData) => {
		console.log(typeof chunckOfData);

		data += chunckOfData.toString();
		// data += chunckOfData //! is already returning a string!
		console.log(data);
		// process.stdout.write(data); // same as console.log()

		const body = JSON.parse(data);
		// console.log(body);
		const { location, current } = body;
		console.log(
			`The weather in ${location.name} is ${current.temp_c} degree C and it feels like ${current.feelslike_c} degree C.
Weather condition is ${current.condition.text}.`
		);
	});
	// listens to end event
	response.on("end", () => {
		console.log("done!");
	});
});

request.end(); //! crucial method
// This method is necessary to signal that the request has been completed
// and is ready to be sent.
// Without it, the request will never be executed, and the callback for the response
// won't be triggered.
