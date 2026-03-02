//create a for loop that is able to print  out all the leap years btwn 2000 - 2026
for( let year = 2000; year <=2026; year++){
    if(year %4 ==0 && year %100 !==0 || year %400== 0){
        
    console.log(year)
    }
}
 console.log("=====================================")
// Task: Write a for loop to print all odd numbers from 1 to 19.
for(let num = 1;num <= 19; num +=2){
    console.log(num)
}

 console.log("=====================================")

//Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
for(let num=10; num >= 1; num--){
    console.log(num)
}

 console.log("=====================================")

//Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
const numbers = [10, 20, 4, 45, 99, 1];
let max =numbers[0];

for(let number of numbers){
    if(number > max)max = number
}
console.log(max)


 console.log("=====================================")

//Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
for(let num = 1;num <= 10; num ++){
    console.log(5*num)
}


 console.log("=====================================")

 //Task: Write a while loop to print all odd numbers from 1 to 19.
 let num =1;

 while(num <= 19){
    console.log(num);
    num += 2
 }
 
  console.log("=====================================")

//Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
let i = 10;

while(i >= 1){
    console.log(i)
    i --
}
 console.log("=====================================")

  // Research on arrow function, functions with parameters and anonymous functions in javascript.

  //1. Functions with Parameters
  //A parameter is a placeholder defined in the function, while an argument is the actual value you pass when calling it
        //Single Parameter: Use one variable to receive data.
        //Multiple Parameters: Separate them with commas.
        //Default Parameters: Set a fallback value if no argument is provided

// 'name' is the parameter; "Guest" is the default value
function welcomeUser(name = "Guest") {
  return "Welcome, " + name + "!";
}

console.log(welcomeUser("Alice")); // "Welcome, Alice!"
console.log(welcomeUser());        // "Welcome, Guest!"


//2. Anonymous Functions
//These are functions without a name. They are typically stored in variables (Function Expressions) or used as callbacks passed into other functions
        //Callback Example: Use them for tasks that happen later, like a timer.
        //Array Methods: Use them to process lists of data


// Stored in a variable
const sayHi = function() {
  console.log("Hi there!");
};

// Used as a callback for a 2-second timer
setTimeout(function() {
  console.log("Time's up!");
}, 2000);

//arrow functions provide a shorter syntax and do not have their own this context
//Implicit Return: If the function is one line, you can skip return and {}.
//Parentheses Rules: If there is exactly one parameter, parentheses are optional.
//Lexical this: They "inherit" the this value from the code around them, which is helpful in classes and objects


// Traditional Anonymous Function
const add = function(a, b) { return a + b; };

// Arrow Function (Equivalent)
const addArrow = (a, b) => a + b;

// Single parameter (no parentheses needed)
const square = x => x * x;

console.log(square(5)); // 25
