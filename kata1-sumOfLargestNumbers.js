const sumLargestNumbers = function(data) {
  let largestA = data[0];
  let largestB = data[0];

  for(let i = 0; i < data.length; i++) {
    if(data[i] > largestA) {
      largestB = largestA;
      largestA = data[i];
    } else if (data[i] > largestB && data[i] != largestA) {
    largestB = values[i];
    }  
  } 
  return largestA + largestB;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));