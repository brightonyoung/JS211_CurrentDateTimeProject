// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

let convertToString = () => {
  
  let newString = document.getElementById("numberToString").value;

  let convertedString = newString;

  document.getElementById("converted-string").innerHTML = "The Number Is Now:  " + newString;

}



// Write a JavaScript program to convert a string to the number.

let toNumber = () => {
  let number = document.getElementById("stringToNumber").value;

  let string = parseInt(number);

  document.getElementById("display-number").innerHTML = "The String Is Now: " + string;

  
}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let getDataType = () => {
  let input = document.getElementById("dataType").value;

  if (input == '') {
  document.getElementById("data-type").innerHTML = "Your Data Is: Undefined";
} else if(input == 'true' || input == 'false') {
  document.getElementById("data-type").innerHTML = "Your Data Is A: Boolean";
} else if(isNaN(input) == false) {
  document.getElementById("data-type").innerHTML = "Your Data Is A: Number";
} else if(isNaN(input) == true) {
  document.getElementById("data-type").innerHTML = "Your Data Is A: String";
} else {
  document.getElementById("data-type").innerHTML = "Your Data Is: NaN";
}
};
  
// Write a JavaScript program that adds 2 numbers together.


let addNums = () => {
  let firstNum = parseInt(document.getElementById("first-num").value);
  let secondNum = parseInt(document.getElementById("second-num").value);

  document.getElementById("sum").innerHTML = firstNum + secondNum;
}

// Write a JavaScript program that runs only when 2 things are true.

let numberCheck = () => {
  let numberUnderTen = document.getElementById("under-10").value;

  if (numberUnderTen <= 10 && (isNaN(numberUnderTen) == false)) {
    document.getElementById("checked-num").innerHTML = "You did it!"
} else if (numberUnderTen <= 10 || (isNaN(numberUnderTen) == true)) {
    document.getElementById("checked-num").innerHTML = "That's not a number."
} else if (numberUnderTen >= 10 && (isNaN(numberUnderTen) == false)) {
    document.getElementById("checked-num").innerHTML = "That's too high."
}
};

// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
