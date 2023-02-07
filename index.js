//Problem 1: Let’s play a mind game
//mindGame Section (General Mathematical Formulas)

function mindGame(positiveNumber) {
    if (positiveNumber <= 0 || typeof (positiveNumber) != 'number') {
        return 'Please Enter a Positive Number.'
    }
    else {
        const multi = positiveNumber * 3;    //Here is the Multiplication showing
        const sum = multi + 10;              //Here is the Addition showing
        const div = sum / 2;                 //Here is the Division showing
        const sub = div - 5                  //Here is the subtraction showing
        return sub;                          //Here is the Total Addition showing
    }
}



//Problem 2: Finding even or odd
//evenOdd Section (The character is shown as an Odd or Even number)

function evenOdd(string) {
    if (typeof (string) != 'string') {
        return 'Please Enter a String.'
    }
    else {
        if (string.length % 2 === 0) {
            return "even"                 //If the number is Even
        }
        else {
            return "odd"                  //If the number is Odd
        }
    }
}



//Problem 3: Is Less or Greater than seven
//isLGSeven Section (If 7 is a large number, it will be doubled)

function isLGSeven(number) {
    if (typeof (number) != 'number') {
        return 'Please Enter a Valid Number.'
    }
    else {
        const afterSubtract = number - 7;   //Subtract 7 from the number
        if (afterSubtract < 7) {            //If the minus is less than 7
            return afterSubtract;
        }
        else {
            const multiplyBy2 = number * 2;  //If the minus is greater than 7, it will be doubled
            return multiplyBy2;
        }
    }
}



//Problem 4: Finding Bad data
//findingBadData Section (Total negative numbers count)

function findingBadData(array) {
    if (Array.isArray(array) != true) {
        return "Please Enter a Array"
    }
    else {
        let badData = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element < 0) {
                badData.push(element);
            }
        }
        return badData.length;                 //Negative numbers count
    }
}



//Problem 5: Convert your gems into diamond
//gemsToDiamond Section (Mathematical calculations of the three-person diamond)

function gemsToDiamond(gems1, gems2, gems3) {
    if (typeof (gems1) != 'number' || typeof (gems2) != 'number' || typeof (gems3) != 'number') {
        return "Please Enter a Valid Number."
    }
    else {
        const diamond1 = gems1 * 21;
        const diamond2 = gems2 * 32;
        const diamond3 = gems3 * 43;
        const totalDiamond = diamond1 + diamond2 + diamond3;  //Total number of Diamonds
        if (totalDiamond > 1000 * 2) {
            return totalDiamond - 2000;    //If Greater than 2000 then Minus 2000
        }
        else {
            return totalDiamond;    //And if less than 2000 it will be the whole number
        }
    }
}