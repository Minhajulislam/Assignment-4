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

const myInput = [12, 54, 5, -6, -8, -9, -7, -55, 15, 4, 465, 65, -465, -4564, -1654, -654];
const output = findingBadData(myInput);
console.log(output)