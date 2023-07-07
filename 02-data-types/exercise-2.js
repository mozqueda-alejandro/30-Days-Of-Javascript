// Printing escape quotes
// 1
let quote1 = 'The quote \'There is no exercise better for the heart than reaching down and \
lifting people up.\' by John Holmes teaches us to help one another.';
console.log(quote1);
// 2
let quote2 = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity \
and love are the same -- with charity you give love, so don't just give money but reach out your \
hand instead.\"";
console.log(quote2);

// Casting data types
// 3
if (typeof '10' !== 10) {
    console.log(parseInt('10') === 10);
}
// 4
if (parseFloat('9.8') != 10) {
    console.log(Math.ceil(parseFloat('9.8')) == 10);
}

// includes() function
// 5
console.log('python'.includes('on') && 'jargon'.includes('on'));
// 6
let jargonString = 'I hope this course is not full of jargon';
console.log(jargonString.includes('jargon'));

//Random Numbers
// 7
console.log("Random number between 0 and 100:", Math.floor(Math.random() * 101));
// 8
console.log("Random number between 0 and 100:", Math.floor(Math.random() * 51) + 50);
// 9
console.log("Random number between 0 and 255:", Math.floor(Math.random() * 256));
// 10
let javascriptString = 'JavaScript';
console.log("Random letter from \"JavaScript\":", Math.floor(Math.random() * javascriptString.length));

// Math class
//11
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        print(Math.pow(i, j) + " ");
    }
    console.log();
}

function print(string) {
    process.stdout.write(string);
}

// function print() {
//     for (var i = 0; i < arguments.length; i++) {
//         print(arguments[i]);
//       }
// }