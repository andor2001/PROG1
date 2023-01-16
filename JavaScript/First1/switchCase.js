// if...else analog switch_case

// input browser name
var browser = prompt("Input browser name: ");

// name browser change to upper case
browser = browser.toUpperCase();

// output browser name 
console.log(browser);

// check browser name
if (browser == "IE") {
    console.log("Ok, your browse Internet Explorer");
} else if (browser == 'CHROME'
    || browser == 'FIREFOX'
    || browser == 'SAFARI'
    || browser == 'OPERA') {
        console.log('This browsers support');
    } else {
        console.log('Browser unknown!');
    }
