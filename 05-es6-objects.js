//! Obeject property short-hand
// allows adding values onto an object with shorthand syntax under certain conditions
const name = "Andrew";
const userAge = 27;

const user = {
	// name: name, //! When property and value have the same name, we can erase one!
	name, // short-hand syntax for value of same property name
	age: userAge,
	location: "Philadelphia",
};

console.log(user);

//! Obeject destructuring
// When we try to access properties of an object
const product = {
	label: "Red notebook",
	price: 3,
	stock: 201,
	salePrice: undefined,
};

//! The whole goal of destructuring is to extract object properties and their values into
//! individual variables => instead of "product.price" -> price (variable)
//! It is especially usefull when we work with complex objects

// // one way:
// const label = product.label;
// const price = product.price;

// //01 destructuring
// const { label, price } = product;
// console.log(label, price);

//// 02
// //! with destructurig we can grab as many properties as we want even grab ones that are not exist
// //! on the actual object!
// const  { label, price, rating } = product;
// console.log(label);
// console.log(price);
// console.log(rating);

//! get the property of an object with assigning another name to it:
const { label: productLabe } = product; // The new name comes after : after the actual property name
console.log(productLabe);

//! we can set a default value for a property if it is not existed on the object
//! means DEFAULT is onlyt being used when there's no property matching on the object
const { price = 2, rating = 1, salePrice = 5 } = product;
console.log(price); // 3
console.log(rating); // 1
console.log(salePrice); // 5
