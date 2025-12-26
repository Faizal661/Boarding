import { Worker } from "worker_threads";

const NUMBER_TO_CHECK = 1000000007;


const worker = new Worker('./worker.js', {
    workerData: {
        number: NUMBER_TO_CHECK
    }
});

worker.on('message', (result) => {
    console.log(` ${result.number} prime? ${result.isPrime}`);
});

worker.on('error', (err) => {
    console.error('Main: Worker Error:', err);
});

worker.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Main: Worker stopped with exit code ${code}`);
    } else {
        console.log('Main: Worker finished execution successfully.');
    }
});