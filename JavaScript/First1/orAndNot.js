// input value
var inpVal = prompt("Input value", 55);

//check input value 14 - 90
if (inpVal < 14 || inpVal > 90) {
    alert("Value is good: " + inpVal);
}

// second check vith "!""
if (!(inpVal >= 14 && inpVal <= 90)) {
    alert("Value good vith '!' " + inpVal);
}
