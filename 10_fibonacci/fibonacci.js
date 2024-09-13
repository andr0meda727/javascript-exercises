const fibonacci = function(num) {
    //conversion to num
    num = +num;

    if (num < 0) {
        return "OOPS";
    }

    if (num === 0) {
        return 0;
    }
    
    else if (num === 1){
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
 
