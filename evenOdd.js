//Problem 2: Finding even or odd
//evenOdd Section (The character is shown as Odd or Even number)

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

const myInput = "Minhajul Islam";
const output = evenOdd(myInput);
console.log(output)