// function check age > 18;

var userAgeInp = +prompt('Input your age: ', 14);

function checkAge(userAge) {
    if (userAge <= 0 || userAge > 99) {
        return false;
    }
    if (userAge > 18) {
            return true;
        } else {
            return (confirm('Parent control'));
    }  
}

alert(checkAge(userAgeInp));
