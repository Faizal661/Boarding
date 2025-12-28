const arr = [1, 2, 3, null, [4, 5, 6, [7, 8, 9, 10], 11, 12, 13, 14, [15, [[16, 17]]]]]

// let flattedArr=arr.flat(1)
// let flattedArr=arr.flat(Infinity)

// console.log(flattedArr);


//============ Manual alternaive for flat =======

function flatThisArray(arr, depth = 1) {
    let res = []

    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            let nested = flatThisArray(item, depth - 1)
            res.push(...nested)
        } else {
            res.push(item)
        }

    }

    return res
}

console.log(flatThisArray(arr, 2))