const palindromes = function(string) {
    // determine only latin alphabet polindromes
    // remove all non-letter symbols
    let str = string.replace(/[^a-z0-9]/gi, "");
    str = str.toLowerCase();
    let len = str.length;
    let i = 0;
    let j = len-1;

    do {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    } while (i < j);
    return true;
};

// Do not edit below this line
module.exports = palindromes;
