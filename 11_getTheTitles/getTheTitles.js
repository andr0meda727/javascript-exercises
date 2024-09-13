const getTheTitles = function(books) {
    bookArray = [];
    for (let book of books) {
        bookArray.push(book.title)
    }

    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
