const intervalMS = 1000
const end = 4

let curr = 1

let intervalId = setInterval(() => {
    console.log(curr)
    if (curr == end) {
        clearInterval(intervalId)
        process.exit(0)
    }
    curr++

}, intervalMS)