import { parentPort,workerData } from "worker_threads";

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log('worker is running....')


const result = isPrime(workerData.number)

parentPort.postMessage({
    number: workerData.number,
    isPrime: result
})
