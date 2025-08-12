// A callback is a function passed as an argument to another function, which is executed later when a specific event or task completes.

function fetchData(callback) {
    const success = Math.random() < .5
    console.log(success)
    setTimeout(() => {
        if (!success) {
            callback(new Error('falied to fetch'))
        } else {
            callback(null, 'succcess')
        }
    }, 1000)
}


fetchData((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})