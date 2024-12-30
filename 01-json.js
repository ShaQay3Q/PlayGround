const fs = require("fs");

// const movie = {
// 	title: "Grave of the Fireflies",
// 	lengthMinutes: "89",
// 	director: "Toho",
// 	releasedDate: "16.04.1988",
// 	ganre: "Dark drama",
// };

// JSON.stringify() => takes and Object or an Array or any value of sort
// and return JSON
// const movieJSON = JSON.stringify(movie);
// console.log(movieJSON);

// JSON.parse() => takes a JSON string and parse it into an Object
// const parsedMovieJSON = JSON.parse(movieJSON);
// console.log(parsedMovieJSON);

// fs.writeFileSync("01-json.json", movieJSON);

// when reading the file, the content shown in binary
const dataBuffer = fs.readFileSync("01-json.json");

// for human readability it can be turned into string with .toString()
console.log(dataBuffer.toString());

const fileContent = JSON.parse(dataBuffer);
console.log(fileContent);
