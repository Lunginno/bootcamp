var greeting = "Hello FS Cohort";
const times = 5;


//block scope
if (times > 5 && times == 5)
{
     greeting = "Hi there!"
}
else
{
    console.log(greeting + ", the value is false.");
}
//end of block slope

var hello = "Welcome";

if (times == 5 || times > 5)
{
    hello = "Welcome to JavaScript";
}
else
{
    console.log(hello + ", value is false.");
}

console.log(greeting + ": " + hello);

if (times != 5)
{
    console.log(greeting + ", guesswork");
}
else
{
    console.log("I knew it!");
}