let courses = ["Javascript", "Java", "Angular", "React"];
let i; //counter for the loop
let length = courses.length; //total number of courses (array)
let space = ' '; //home made space

for (i = 0; i < length; i++)
{
    courses[i] += space
}
console.log(courses);

//let's display text 5 times according to the number of days in week
const n = 5;

for (i = 1; i <= n; i++)
{
    console.log(`Let us code in JavaScript ${i} days of week`)
}