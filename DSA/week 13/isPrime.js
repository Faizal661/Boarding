// function isPrime(n) {
//     if (n < 2) {
//         console.log(n, false)
//         return
//     }
//     for (let i = 2; i <= n / 2; i++) {
//         if (n % i === 0) {
//             console.log(n, false)
//             return
//         }
//     }
//     console.log(n, true)
//     return
// }


function isPrime(n) {
    if (n < 2) {
        console.log(n, false)
        return
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(n, false)
            return
        }
    }
    console.log(n, true)
    return
}

isPrime(1)
isPrime(2)
isPrime(3)
isPrime(4)
isPrime(5)
isPrime(6)
isPrime(7)
isPrime(8)
isPrime(9)
isPrime(10)
isPrime(11)