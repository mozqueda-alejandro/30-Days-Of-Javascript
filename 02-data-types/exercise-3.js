
// 1
let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
var count = (loveString.match(/love/g) || []).length;
console.log(count);
// 2
let sentenceString = "You cannot end a sentence with because because because is a conjunction"
count = (sentenceString.match(/because/g) || []).length;
console.log(count);

// 3
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let filteredSentence = sentence.replace(/@|\$|%|&|#|;/g, ''); // Only removes special characters excluding [!?]
console.log(filteredSentence);

let wordsOnly = filteredSentence.replace(/[^a-z ]/gi, '').toLowerCase();

let frequencyDict = {};
let words = wordsOnly.split(' ');
words.forEach(word => {
    if (word in frequencyDict) {
        frequencyDict[word] += 1;
    } else {
        frequencyDict[word] = 1;
    }
});

// Convert to key-value pairs to array
var items = Object.keys(frequencyDict).map(function(key) {
    return [key, frequencyDict[key]];
});

items.sort(function(first, second) {
    return second[1] - first[1];
});
console.log("Top 5 words: ");
console.log(items.slice(0, 5));

// 4
class AnnualIncome {

    static rates = {
        'week': 52,
        'bi-weekly': 26,
        'biweekly': 26,
        'month': 12,
        'annual': 1,
        'year': 1,
    }

    /**
     * Factory method to create AnnualIncome object.
     * @param {string} incomeSource user created string with income amount and period.
     * @returns {AnnualIncome} AnnualIncome object.
     */
    static createIncome(incomeSource) {
        let tokens = incomeSource.split(' ');
        console.log(tokens);

        let amount, period;
        tokens.forEach(word => {
            if (amount == undefined && word.match(/\d+/g)) {
                amount = word;
            } else if (period == undefined) {
                period = this.searchRates(word);
            }
        });
        
        let error = (amount == undefined) ? "Amount not found.\n" : '';
        error += (period == undefined) ? "Period not found.\n" : '';
        if (error != '') {
            throw error + "Invalid income statement: " + incomeSource;
        }
        
        return new AnnualIncome(amount, period);
    }

    /**
     * 
     * @param {string} word Used to check if word corresponds to a period in the rates dict.
     * @returns {string} Period if found, undefined otherwise.
     */
    static searchRates(word) {
        for (const key in AnnualIncome.rates) {
            if (word.includes(key)) {
                return key;
            }
        }
        return undefined;
    }

    constructor(amount, period) {
        this.amount = amount;
        this.period = period;
    }

    /**
     * @returns {number} Annual income calculated from amount earned per period for a year.
     */
    getAnnualIncome() {
        return this.amount * AnnualIncome.rates[this.period];
    }

    /**
     * 
     * @returns {string} String representation of AnnualIncome in the format $amount/period x rate periodUnit.
     */
    toString() {
        let periodUnit;
        if (this.period == 'annual' || this.period == 'year') {
            periodUnit = 'year';
        } else {
            periodUnit = this.period + 's';
        }
        return `\$${this.amount}/${this.period}ly x ${AnnualIncome.rates[this.period]} ${periodUnit}`;
    }
}

const incomeStatement = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let incomeSources = incomeStatement.replace(/[^a-z0-9, ]/gi, '').toLowerCase().split(', ');

let annualIncome = 0;
let incomeStringDetailed = '', incomeString = '';

for (let i = 0; i < incomeSources.length; i++) {
    let incomeObject;
    try {
        incomeObject = AnnualIncome.createIncome(incomeSources[i]);
    } catch (error) {
        console.log(error);
        continue;
    }
    
    temp = incomeObject.getAnnualIncome();
    annualIncome += temp;
    incomeString += temp.toString();
    incomeStringDetailed += (incomeObject.toString());


    if (i < incomeSources.length - 1) {
        incomeString += " + ";
        incomeStringDetailed += " + ";
    } else {
        incomeString += ` = \$${annualIncome}`;
    }
}

console.log("Income Statement: " + incomeStatement + "\n");
console.log(incomeStringDetailed);
console.log(incomeString + "\n");
console.log("Annual Income: $" + annualIncome);

