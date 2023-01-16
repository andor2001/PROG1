for (var i = 0; i <= 10; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
}
console.log("--------------------");
var i = 0;

while (i < 5) {
    i++;
    console.log("number: " + i);
}

console.log("------input num > 100----------");
// Input number > 100, if < 100 ask again

var inpNumber;

do {
    inpNumber = prompt("Input number: ", 0);
} while (inpNumber <= 100 && inpNumber != null);
//
console.log("----------------");