const palindromes = function (string) {
    string = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    let array = string.split('');
    let arrayReversed = array.slice();
    arrayReversed.reverse();
    return array.every((value, index) => value == arrayReversed[index])
};

// Do not edit below this line
module.exports = palindromes;
