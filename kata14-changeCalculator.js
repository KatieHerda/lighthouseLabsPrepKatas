//Function that returns an object which gives the total amount of change to give back following a purchase. 

const calculateChange = function(total, cash) {
  
  const currencyNames = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickle', 'penny'] //Holder for currency names.
  const currencyValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1] //Holder for currency values

  let changeObject = {}; //Array to hold final change object.
  let changeLeft = cash - total; //Equation to calculate change.

  for (let i = 0; i < currencyValues.length; i++) { //Loop through calculateChange values.
    if (changeLeft >= currencyValues[i]) { 
      //If change left (cash - total) is greater than the currency value index, proceed with code in block. 
      //Use >= to include exact change (ex change 100 = oneDollar: 1 vs quarters: 4).

      changeObject [currencyNames[i]] = Math.floor(changeLeft / currencyValues[i]); 
      
      //Assign currency name to changeObject key and assign the value to the change divided by the currency value to determine how many of that currency are needed (ex: fiveDollar: 2). 

      // Math floor is used to round down to the nearest whole number, as you cannot give partial denominations back (ex. fiveDollar: 2.5).
      
      changeLeft = changeLeft % currencyValues[i]; //Assign change left following each subtraction of currency. (start with 600 change, subtract 500 following fiveDollars to give you 100. then subtract 100 following oneDollar to give you 0 - until no change is left).

    }
  }
  return changeObject; //Return final object.
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
