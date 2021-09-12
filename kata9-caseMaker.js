let camelCase = function(input) {
  let string = "";
  let array = input.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      string += array[i].charAt(0).toUpperCase() + array[i].slice(1);
    } else {
      string += array[i].toLowerCase();
    }
  } 
  return string;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));