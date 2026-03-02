// Functions with parameters
//Parameters are values that get passsed as arguments when we invoke a function
//They help us to create functions that can be reusable


function greeting(name){
    console.log("Hello", name,"How have you been?")
}

greeting("Benard Kim")
greeting("John James")
greeting("Kiarie Lewis")

console.log("====================================")
// Below is a function with parameters to calculate the sum of two numbers

function addition(number1,number2){
    sum =number1 +number2
    console.log("The sum of the numbers  is", sum)
}

addition(45,27)
 

console.log("====================================")

// By use of  afunction that accepts parameters to calc the area of atriangle whose base is 20cm and height is 12cm


function trianglearea(base,height){
    area=(base *height)/2
    console.log("The area is",area)
}

trianglearea(20,12)

console.log("====================================")

// Find the simple interest given the principal as 50000,rate as 5%,time as  8 years

function simpleinterest(principal,rate,time){
    interest=(principal* rate* time)/100
    console.log("The simple interest is",interest)
}

simpleinterest(50000,5,8)