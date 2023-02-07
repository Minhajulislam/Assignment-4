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
const myInput = 20;
const output = isLGSeven(myInput);
console.log(output)