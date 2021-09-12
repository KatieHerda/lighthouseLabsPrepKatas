const repeatNumbers = function(data) {
  let finalArray = [];
  let string = '';
  
  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row][1]; col++) {
      string = string + data[row][0];
    }
    finalArray.push(string);
    string = '';
  }
  return finalArray.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));