// Input login
var userLogin = prompt("Input login: ", "Visithor");

// Check login
if (userLogin == "Admin") {
    // ipput password
    var userPassword = prompt("Input password: ", "Password");
    // check admin password
    if (userPassword == "Black Overlord") {
        alert("Welcome!");
    } else if (userPassword == "null") {
        alert("Cancel");
    } else {
        alert("Wrong password!");
    }
    
}
// check cancel or user unknown
else if (userLogin == "null") {
    alert("Cancel");
} else {
    alert("User unknown!");
}