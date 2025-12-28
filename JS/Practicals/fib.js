// ======= Full Fibonacci upto 'n'

function fibonacciUptoN(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }
    return fib
}


function fibonacciUptoNRecursion(n, f = 0, s = 1) {
    if (n < 0) return 
    console.log(f)
    fibonacciUptoNRecursion(n - 1, s, f + s)
}


// ========== Only the 'N'th fibonacci

function nthFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        let ithFib = fib[0] + fib[1]
        fib[0] = fib[1]
        fib[1] = ithFib
    }
    return fib[1]
}

console.log(fibonacciUptoN(10))
console.log(nthFibonacci(10))
fibonacciUptoNRecursion(10)
