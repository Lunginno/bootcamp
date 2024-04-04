const gpa = 100;
const exp = 70;
const dist = 85;
const avg = 50;
const fail = 49;
const dnw = 0;
const passmark = 50;


if ( gpa >= dist)
{
    console.log("You passed with a distinction: " + gpa);
}
else if (gpa >= exp && gpa <= dist)
{
    console.log("You passed with an exemption: " + gpa);
}
else if (gpa == avg )
{ 
    console.log("You passed with an average of: " + gpa)
}
else if (gpa <= fail && gpa > dnw)  
{
    console.log("You failed with: " + gpa);
}
else if (gpa == dnw)
{
    console.log("You did not write.");
}


