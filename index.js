// Question 1
// function ParentFunction(num) {
//     return function(x) { //Anonymous Function
//          x = 5 ;
//         return  x + num;
//     };
//   }
//   let Anonymous = ParentFunction(8);
//   let Anonymous2 = ParentFunction(3);

//   console.log(Anonymous()); 
//   console.log(Anonymous2()); 

//QUESTION 2
// let array = [1, 2, 3, 4, 5, 6, 7];
// function recursiveFunction(array, valueToBeCheck) {
//     if (array.length === 0) {
//       return false;
//     }
  
//     else if (array[0] === valueToBeCheck) {
//       return true;
//     }
  
//     return recursiveFunction(array.slice(1),valueToBeCheck);
//   }
//   console.log(recursiveFunction(array, 1)); // Output: true
//   console.log(recursiveFunction(array, 10)); // Output: false
    
//QUESTION 3