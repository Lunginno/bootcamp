let prompt = require("prompt-sync")();
//a program that will check if the user is old enough to access the site

function checkAge(age)
{
    if (age >= 18)
    {   
        return true;
    }
    else 
    { 
        return console.log("You dont have permission from your parents!");
    }
}
    let age = prompt("How old are you? ");
    if (checkAge(age))
    {
        console.log("Access is granted.");
        showMovie();
    }
    else
    {
        console.log("Access is denied!");
    }

    function showMovie()
    {
        //if (checkAge(age))
        
            let i =2;
            let time = 10;
            for(i = 100000; i > time; i--) 
            {
                console.log("PLAYING A MOVIE", i);
            }
        
    }
showMovie();