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
const myInput = 5;
const output = mindGame(myInput);
console.log(output)