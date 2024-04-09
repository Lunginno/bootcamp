let userName = "Alice";
let message = "Welcome, ";
from = " ";
text = " ";



function sendMessage()
{
    let message = "Welcome, " + userName;
    console.log(message);
}

sendMessage(); //always call/initialize the var in order to get return values

function showMessage()
{
    userName = "Bob";
    console.log(userName)
}

showMessage();
console.log(message, userName);

function sendMsg(from, text)
{
    from = "Anonymous, ";
    text = "Welcome!"
    return from + text;
}

console.log(sendMsg(from, text));