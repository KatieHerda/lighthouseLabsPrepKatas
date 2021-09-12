const talkingCalendar = function(date) {
  let array = date.split("/");
  let year = array[0];
  
  //Month
  switch (array[1]) {
    case "01": month = "January"; break;
    case "02": month = "February"; break;
    case "03": month = "March"; break;
    case "04": month = "April"; break;
    case "05": month = "May"; break;
    case "06": month = "June"; break;
    case "07": month = "July"; break;
    case "08": month = "August"; break;
    case "08": month = "September"; break;
    case "08": month = "October"; break;
    case "08": month = "November"; break;
    case "12": month = "December"; break;
  }

  //Day
  let day = array[2];

  //(+day) Unary plus operator - it removes any leading zeros attached to the new number it creates.

  if (day === "01" || day === "21" || day === 31) {
    suffix = +day + "st" 
  } else if (day === "02" || day === "22") {
    suffix = +day + "nd"
  } else if (day === "03" || day === "23") {
    suffix = +day + "rd"
  } else {
    suffix = +day + "th"
  }

  let fullDate = month + " " + suffix +  ", " + year;
  return fullDate; 

};
    

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

