const urlEncode = function(text) {
  text = text.trim();
  let whiteSpace = " ";
  let newString = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === whiteSpace) {
      newString += "%20";
    } else {
      newString += text[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));