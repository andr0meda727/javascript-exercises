const removeFromArray = function(array, ...args) {
    const arrayWithoutRemovedValues = []
    elementsLoop: for (const element of array) {
        for (const arg of args) {
            if (element === arg) {
                continue elementsLoop;
            }
        }
        arrayWithoutRemovedValues.push(element)
    }

    return arrayWithoutRemovedValues;
};

// Do not edit below this line
module.exports = removeFromArray;
