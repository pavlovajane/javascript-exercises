const reverseString = function(inputstr) {
    
    let len = inputstr.length;
    let backwardstr = "";

    for (let i = len-1; i >= 0; i--) {
        backwardstr += inputstr[i];
    }

    return backwardstr;

};

// reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
