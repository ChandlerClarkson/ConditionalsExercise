// 1
let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

// 1a
if (randomNum >= 4){
    console.log("Equal to or more than 4");
} else if (randomNum >= 2){
    console.log("Equal to or more than 2");
} else {
    console.log("Equal to 1");
}

// 1b
if (randomNum >= 4){
    console.log("Equal to or more than 4");
}

if (randomNum >= 2){
    console.log("Equal to or more than 2");
}else {
    console.log("Equal to 1");
}


// 1c
if (randomNum != 3){
    console.log("Not equal to 3");
}

// 1d
// if (randomNum != (3 && 5)){ correct
// if (randomNum != 3 || randomNum != 5){ Not valid answer
if (randomNum != 3 && randomNum != 5){
    console.log("Not equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === (2 || 4)){
// if (randomNum === 2 || randomNum === 4){
    console.log("Equal to 2 OR equal to 4");
}

// Bonus
// 2
// Ternaries are good to use in place of a simple IF ELSE statement
// You can set the returned value of a ternary to a variable 
randomNum >= 4 ? console.log("Equal to four or more") : console.log("Less than four");

// 3
// Switch statement takes in a parameter and returns and returns something based on the cse (Or the match) that the parameter goes with
switch (randomNum){
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4: 
        console.log("Four");
        break;
    default:
        console.log("Five");
}