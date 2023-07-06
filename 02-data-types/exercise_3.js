
// // 1
// let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// var count = (loveString.match(/love/g) || []).length;
// console.log(count);
// // 2
// let sentenceString = "You cannot end a sentence with because because because is a conjunction"
// count = (sentenceString.match(/because/g) || []).length;
// console.log(count);

// // 3
// let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// let filteredSentence = sentence.replace(/@|\$|%|&|#|;/g, ''); // Only removes special characters excluding [!?]
// console.log(filteredSentence);

// let wordsOnly = filteredSentence.replace(/[^a-z ]/gi, '').toLowerCase();

// let frequencyDict = {};
// let words = wordsOnly.split(' ');
// words.forEach(word => {
//     if (word in frequencyDict) {
//         frequencyDict[word] += 1;
//     } else {
//         frequencyDict[word] = 1;
//     }
// });

// // Convert to key-value pairs to array
// var items = Object.keys(frequencyDict).map(function(key) {
//     return [key, frequencyDict[key]];
// });

// items.sort(function(first, second) {
//     return second[1] - first[1];
// });
// console.log("Top 5 words: ");
// console.log(items.slice(0, 5));

// 4
const incomeStatement = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let monthlyIncome;
let annualIncome;
let incomeSources = incomeStatement.split(', ');
incomeSources.forEach(source => {
    source = source.replace(/[a-z]/gi, '');
});

