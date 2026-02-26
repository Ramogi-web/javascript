// Object data type;
// An object in javascript is a data type that stores data in key value pairs.

let person = {
    Name :"Justus",
    Age :70,
    isRegistered:true
};

console.log("details of the person:",person)

//First method is by the use of square brackets
console.log(person["Age"])

// Second method is by the use of (.) notation
console.log(person.Name)


// Array data types
// This refer to a list of items in indexes
let fruits=["Mango","Pineapple","Apple","Banana","Melon","Lemon","Grapes"]

console.log("fruits",fruits)

// To access the items of an array we use  the index
console.log(fruits[3])

// You can slice the items on an array
console.log(fruits.slice(2,5))