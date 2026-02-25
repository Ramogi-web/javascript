// String Data Types
// A string is s series /sequence of characters that are enclosed inside of quotes.

let name="Justus Ramogi"
console.log("The name is:",name)
console.log(typeof(name))

// floating point: is a number with a decimal
let quantity =35.5
console.log("The quantity of sugar is:",quantity)
console.log(typeof(quantity))

// Boolean; It returns true or false
let isAdult = true
let isRegistered = false
console.log("Is James an adult?",isAdult)
console.log("Is he registered as a voter?",isRegistered)

console.log(typeof(isAdult))

// undefined : is a data type that has been declared but there is no value that has ben assigned to it
let county;
console.log("The county is",county)

// null data type: It is a data type that contains null values
let username=null
console.log("What is the username",username)

// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of an array.

// Array Data Type : An array is an ordered list of values. Each item in the list has a numerical position called an index, starting at 0.
const fruits = ["Apple", "Banana", "Cherry", "Date"]
console.log("Fruits:",fruits)


// Object Data Type : An object is a collection of related data stored in key-value pairs. Instead of a number, you use a specific name (the key) to find the data.
const user = {
    firstName: "Alice",
    age: 28,
    isMember: true,
    location: "Nairobi"
}
console.log(user)
