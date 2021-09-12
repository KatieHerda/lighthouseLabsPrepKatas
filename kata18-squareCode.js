const squareCode = function(message) {

  let messageWithoutSpaces = message.split(' ').join(''); //remove spaces
  
  //find the rounded sq root of the length and assign to be the side length.
  const sideLength = Math.ceil(Math.sqrt(messageWithoutSpaces.length)); 

  let squaredMessage = ''; //empty string to take squared message.

   //iterates over the spaceless message and returns a squared message 
   //(0, 1, 2)
  for (let i = 0; i < sideLength; i++) {
    //console.log('this is i: ' + i)
    for (let j = i; j < messageWithoutSpaces.length; j += sideLength) {
      //console.log(j)
      squaredMessage += messageWithoutSpaces[j];
    }
    squaredMessage += ' ';
  }
  return squaredMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));