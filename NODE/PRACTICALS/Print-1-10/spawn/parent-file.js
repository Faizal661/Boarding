import { spawn } from "child_process";

const child = spawn('node', ['./child-file.js'])

child.stdout.on('data',(data)=>{
    console.log(data.toString())
})


child.stderr.on('data', (err) => {
    console.error('Error', err.toString())
})

child.on('close', (code) => {
    console.log('process exited with code', code)
})
