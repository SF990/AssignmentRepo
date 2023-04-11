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
    // function NewPara(text){
    // let para = document.createElement("p");
    // let textAdd = document.createTextNode(text);
    // para.appendChild(textAdd);
    
    // const element = document.getElementById("div1");
    // element.appendChild(para);}
    //  NewPara('I am Fahad')
    
// QUESTION 4
    // function addListItem(text) {
    //     let list = document.querySelector('ul');
    //     let newItem = document.createElement('li');
    //     newItem.textContent = text;
    //     list.appendChild(newItem);
    //   }
    //   document.write(addListItem('BANANA'));

//QUESTION 5
    // const myPara = document.getElementById('my-para');
    // myPara.innerHTML = '<b>Pakistan Zindabad</b>';
    // //console.log(myPara)
    // function BackgroundChanger(element ,color) {
    //     element.style.backgroundColor = color;
    // }
    // let my_element = document.getElementById('my-para');
    // BackgroundChanger(my_element,'#FF0000');

//QUESTION 6    
//     function localStorageSaver (key , object){
//         let myObject = JSON.stringify(object);
//         localStorage.setItem(key , myObject)
//     }
//     let objectData = {Boy_Name : 'Fahad' , Age : 19};
//    localStorageSaver('my-key', objectData);

// QUESTION 7
    // // let prevStudents = localStorage.getItem('my-key'); // get from LocalStorage
    // //  let data = JSON.parse(prevStudents);
    // //  console.log(data);

    //  function getData (key){
    //    let prevData = localStorage.getItem(key);
    //    let getData = prevData ;
    //    if (getData !== null) {
    //     return JSON.parse(getData)
    //    }
    //    return null
    //  }
    //  let data = getData('my-key');
    //  console.log(data);

//QUESTION 8
function saveObjectToLocalStorage(obj) {
    for (let prop in obj) {
      localStorage.setItem(prop, obj[prop]);
    }
    let newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      let prop = localStorage.key(i);
      newObj[prop] = localStorage.getItem(prop);
    }
    return newObj;
  }
  let myObj = { name: 'Fahad', age: 19, email: 'fahadnaeem838@gmail.com' };
let savedObj = saveObjectToLocalStorage(myObj);

console.log(savedObj); 

    