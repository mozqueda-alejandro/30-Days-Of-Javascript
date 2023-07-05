let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log('Challenge length: ' + challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3));
console.log(challenge.substring(0, challenge.indexOf('Days Of JavaScript')));
console.log(challenge.includes('Script'));
console.log(challenge.split(' '));

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(sentence.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match(/a/g));

let firstPhrase = '30 Days of';
let secondPhrase = 'JavaScript';
console.log(firstPhrase.concat(secondPhrase));
console.log(challenge.repeat(2));