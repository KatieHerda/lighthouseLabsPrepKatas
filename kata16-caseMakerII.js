//Function to return a string in a chosen case style: camel, pascal, snake, or kebab.

//Plan is to create multiple functions for each different case style and then create a final function that will pull from each case function as needed.

//Camel case function.
//Changes the first letter of every word following the first to have a capitalized first letter. 
const camelCase = function(input) {
  let string = "";
  input = input.split(" "); // create an array with seperate string words.
  for (let i = 0; i < input.length; i++) {
    if (i !== 0) { //For every word following the one at index 0.
      string += input[i].charAt(0).toUpperCase() + input[i].slice(1); //add the fist letter of the second word on to the string and capitalize it. Then add the rest of the characters on starting at index 1 (second letter) using array[i].slice(1).
    } else {
      string += input[i].toLowerCase(); //add the first word on in all lower case.
    }
  } 
  return string;
};

//Pascal case function.
//Changes first letter of every word to be upper case.
const pascalCase = function(input) {
  let string = "";
  input = input.split(" ");
  for (let i = 0; i < input.length; i++) {
    string += input[i].charAt(0).toUpperCase() + input[i].slice(1);
  } 
  return string;
};

//Snake case function.
//Replace all spaces with underscores.
const snakeCase = function(input) {
  let string = input.split(" ").join("_");
  return string;
};

//Kebab case function
const kebabCase = function(input) {
  let string = input.split(" ").join("-");
  return string;
};

//Title case function
const titleCase = function(input) {
  let string = "";
  input = input.split(" "); // create an array with seperate string words.
 
  for (let i = 0; i < input.length; i++) {
      string += input[i].charAt(0).toUpperCase() + input[i].slice(1) + ' '; //capitalize the first letter of every word. Then add the rest of the characters on starting at index 1.
  }
  return string;
}; 
  
//Vowel case function
const vowelCase = function (input) {
  let string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      string += input[i].toUpperCase();
    } else {
      string += input[i];
    }
  }
  return string;
};

//Consonant case funcation
const consonantCase = function(input) {
  let string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      string += input[i];
    } else {
      string += input[i].toUpperCase();
    }
  }
  return string;
}

//Upper case function
const upperCase = function(input) {
  let string = "";
  for (let i = 0; i < input.length; i++){
    string += input[i].toUpperCase()
  }
  return string;
}

//Lower case function
const lowerCase = function(input) {
  let string = "";
  for (let i = 0; i < input.length; i++){
    string += input[i].toLowerCase()
  }
  return string;
}


const makeCase = function(input, cases) {
  let finalString = "";
  
  if (typeof cases === "string"){
    if (cases === "camel"){
      return camelCase(input);
    } else if (cases === "pascal"){
      return pascalCase(input);
    } else if (cases === "snake"){
      return snakeCase(input);
    } else if (cases === "kebab"){
      return kebabCase(input);
    } else if (cases === "title"){
      return titleCase(input);
    } else if (cases === "vowel"){
      return vowelCase(input);
    } else if (cases === "consonant"){
      return consonantCase(input);
    } else if (cases === "upper"){
      return upperCase(input);
    } else if (cases === "lower"){
      return lowerCase(input);
    }
  } else {
    let finalString = input;
    for (let i = 0; i < cases.length; i++){
      if (cases[i] === "camel"){
        finalString = camelCase(finalString);
      } else if (cases[i] === "pascal"){
        finalString = pascalCase(finalString);
      } else if (cases[i] === "snake"){
        finalString = snakeCase(finalString);
      } else if (cases[i] === "kebab"){
        finalString = kebabCase(finalString);
      } else if (cases[i] === "title"){
        finalString = titleCase(finalString);
      } else if (cases[i] === "vowel"){
        finalString = vowelCase(finalString);
      } else if (cases[i] === "consonant"){
        finalString = consonantCase(finalString);
      } else if (cases[i] === "upper"){
        finalString = upperCase(finalString);
      } else if (cases[i] === "lower"){
        finalString = lowerCase(finalString);
      }
    }
    return finalString;
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));