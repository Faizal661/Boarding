//only remove adjacent odds , dont remove individual odds
// INPUT : [1, 2, 3, 4, 5, 7, 9, 6, 7, 5, 10, 11, 13] 
// OUTPUT: [1, 2, 3, 4, 6, 10 ]

const arr = [1, 2, 3, 4, 5, 7, 9, 6, 7, 5, 10, 11, 13]

let isPrevOdd = false
let adjOdds = false
for (let i = 0; i < arr.length; i++) {
    if (isPrevOdd) {
        if (arr[i] % 2 === 1) {
            if (i === arr.length - 1) arr.splice(i - 1, 2)
            arr.splice(i--, 1)
            adjOdds = true
        } else {
            if (adjOdds) {
                arr.splice((i--) - 1, 1)
                adjOdds = false
            }
            isPrevOdd = false
        }
    }

    if (arr[i] % 2 === 1) isPrevOdd = true
}

console.log(arr)