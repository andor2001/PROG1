var userAge,userName;


function askHi() {
    userName = prompt("Your name? ", 'Alex');
    if (userName == null) {
        userName = 'Error';
    }
    userAge = prompt('Your age?', '18');
    if (userAge == null) {
        userAge = 'Error';
    } else {
        userAge = +userAge;
    }
}

function sayHi(uName, uAge) {
    alert('Name: ' + uName + '\n' + 'Age: '  + uAge + '\n' + typeof(uAge));
}

askHi();
sayHi(userName, userAge);
