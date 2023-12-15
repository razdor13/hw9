const sum = (function () {
    let totalsum = 0;
    return function numberSum(b) {
        totalsum += b;
        return totalsum;
    };
})();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
console.log(sum(20));
