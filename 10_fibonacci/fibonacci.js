const fibonacci = function(number) {
    number = Number(number);
    if (number < 0) {
        return "OOPS";
    }
    if (number < 2) {
        // basic case
        return number;
    }

    return fibonacci(number-1) + fibonacci(number-2);
};

console.log(fibonacci(4));
console.log(fibonacci(-25));

// Do not edit below this line
module.exports = fibonacci;
