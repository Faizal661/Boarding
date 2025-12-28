import { parentPort,workerData } from "worker_threads";

let number=1;
let timer=setInterval(()=>{
    // console.log(number)
    parentPort.postMessage(number)
    number++

    if(number===workerData.limit){
        clearInterval(timer)
        process.exit(0)
    }
},1000)