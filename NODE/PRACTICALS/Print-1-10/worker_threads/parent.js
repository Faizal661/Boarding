import { Worker } from "worker_threads";

let child = new Worker('./worker.js', {
    workerData: {
        limit: 6
    }
})


child.on('message', msg => {
    console.log('mesg from worker ',msg)
})

child.on('exit', code => {
    console.log('process exited ')
})