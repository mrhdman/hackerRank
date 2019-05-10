function factorial(n) {
    var result = n
    if (n === 0 || n === 1) {
        return 1;
    }
    while (n > 1) {
        n--;
        result *= n
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(7));