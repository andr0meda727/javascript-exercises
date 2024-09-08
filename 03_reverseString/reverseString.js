const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedArray = [];

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversedArray.push(stringArray[i]);
    }
    let reversedString = reversedArray.join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
