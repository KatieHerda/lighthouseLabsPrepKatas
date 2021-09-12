const urlDecode = function(text) {

  let finalObject = {}; //to push final objects into
  let keys = []; //to hold key array
  let values = []; //to hold value array

  text = text.split('%20').join(' '); //add white space.
  text = text.split('&'); //seperate key-value pairs

  for (let i = 0; i < text.length; i++) { //loop through arrays
    keys = text[i].slice(0,text[i].search("=")); //first half: keys to keys array (start to =)
    values = text[i].slice((text[i].search("=")+1),text[i].length); //second half (= to length): values to values array
    finalObject[keys] = values; //create key-value pairs in object
  }
  return finalObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


/* 
The '&' seperates the key-value pairs
The '=' seperates the keys from the values
The '%20' seperates the words as input.
Function takes in a string as input
Output will be an object 



let finalObjectsArr = [];
  let finalKeys = finalObjects[0];
  let finalValues = finalObjects[1];*/

