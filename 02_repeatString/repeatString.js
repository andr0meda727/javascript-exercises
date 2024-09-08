const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }

    let repetatedString = '';
    for (let i = 0; i < num; i++) {
        repetatedString += string;
    }

    return repetatedString;
};

// Do not edit below this line
module.exports = repeatString;
