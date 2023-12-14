function sum() {
    let totalsum = 0;
    return function numberSum(b) {
        totalsum += b;
        return totalsum;
    };
}

const wtf = sum();

console.log(wtf(3));
console.log(wtf(5));
console.log(wtf(20));
console.log(wtf(20));
