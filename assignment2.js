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
