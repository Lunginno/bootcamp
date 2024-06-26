let courses = ["Javascipt", "Java", "Angular", "React"]; //pre-defined array
courses.length = 6;

courses[4] = "Typescipt";
courses[5] = "Vue";
console.log("Number of courses available: " + courses);
//check if the array is an object or string
console.log(typeof courses);

//injecting multiple values into a single array
courses.push('C++', 'Flutter', 'C#', 'Python');
console.log("New semester courses: " + courses);

//check if the array is an array method
console.log(`Courses are: ${courses instanceof Array}`)


let faculty = courses.toString();
console.log(`Faculties are: ${faculty instanceof Array}`)
console.log("Courses as String: " + faculty);
console.log(typeof faculty);
console.log(faculty.toUpperCase());

let learners = new Array(); //Undefined arrays

learners[0] = 1;
learners [1] = 2;
learners [2] = 3;
learners [3] = 4;
learners [4] = 5;

console.log("Number of learners: ", learners.length)