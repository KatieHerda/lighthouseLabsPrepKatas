//Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:
// { CourseName: [instructors] } 


const organizeInstructors = function(instructors) {
  let courseArr = [];
  let nameArr = [];
  let organizedList = {};

  for (let i = 0; i < instructors.length; i++) {
    courseArr[i] = instructors[i].course;
    organizedList[courseArr[i]] = []; // Created an array for the object output
    
    for (let j = 0; j < instructors.length; j++){
      if (courseArr[i] === instructors[j].course){
        
        organizedList[courseArr[i]].push(instructors[i].name);
        
        break;
      }
      
      organizedList[courseArr[i]] = nameArr; 
    }//End of J loop
    
  }// End of I loop
  return organizedList;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
/*
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
*/