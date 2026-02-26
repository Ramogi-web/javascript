// if ...else if...statement
// It is used to evaluate mutiple conditions

let age = 14

if (age < 15){
    console.log("You are too young to watch thi episode")
}
else if(age >= 15 && age < 18){
    console.log("You can watch thi episode but with parental guidance..")
}
else if(age >= 18 && age < 40){
    console.log("Have a seat and enjoy the episode")
}
else{
    console.log("This episode is not suitable for you")
}