// QUESTION 1
// let FirstNum = +prompt("Enter 1st Number")
// let SecondNum = +prompt("Enter 2nd Number")
// if (FirstNum > SecondNum) {
//     console.log(FirstNum)
// } else {
//     console.log(SecondNum)
// }


// QUESTION 2
//  let First2Num = +prompt("Enter Positive or Negative Number")
//  if (First2Num >= 0) {
//     alert("This sign is +")
//  } else {
//     alert("The sign is -")
//  }


// QUESTION 3
// let num1 = +prompt("Enter first number: ");
// let num2 = +prompt("Enter second number: ");
// let num3 = +prompt("Enter third number: ");
// let num4 = +prompt("Enter fourth number: ");
// let num5 = +prompt("Enter fifth number: ");

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }

// if (num3 > largest) {
//   largest = num3;
// }

// if (num4 > largest) {
//   largest = num4;
// }

// if (num5 > largest) {
//   largest = num5;
// }

// console.log("The largest number is " + largest + ".");

// QUESTION 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//        console.log(i + " is even.") 
//     } else {
//        console.log(i + " is odd.") 
//     }
// }

// QUESTION 5
// let English = +prompt("Enter English Marks From 20")
// let Physics = +prompt("Enter Physics Marks From 20")
// let Math = +prompt("Enter Math Marks From 20")
// let CS = +prompt("Enter CS Marks From 20")
// let IT = +prompt("Enter IT Marks From 20")
// let Sum = English + Physics + Math + CS + IT
// if (Sum < 100 && Sum > 90) {
//  console.log("Your Grade is A")
// } else if (Sum < 90 && Sum > 80) {
//    console.log("Your Grade is B") 
// } else if (Sum < 80 && Sum > 70) {
//    console.log("Your Grade is C")
// } else if (Sum < 70 && Sum > 60) {
//     console.log("Your Grade if D")
// } else {
//     console.log("Your Grade is F")
// }


//QUESTION 6
//for (let i = 1; i <= 100; i++) {
  //     if (i % 3 === 0 && i % 5 === 0) {
  //       console.log("FizzBuzz");
  //     } else if (i % 3 === 0) {
  //       console.log("Fizz");
  //     } else if (i % 5 === 0) {
  //       console.log("Buzz");
  //     } else {
  //       console.log(i);
  //     }
  //   }

//QUESTION 7
for (let i = 1; i <= 5; i++) {
    let Dashes = "";
    for (let j = 1; j <= i; j++) {
      Dashes += "*";
    }
    console.log(Dashes);
  }
