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
const myInput1 = 5;
const myInput2 = 10;
const myInput3 = 20;
const output = gemsToDiamond(myInput1, myInput2, myInput3);
console.log(output)