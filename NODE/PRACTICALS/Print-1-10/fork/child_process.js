import {fork} from 'child_process'


let child= fork('./print_1_to_10.js')


child.on('message',(message)=>{
    console.log(message.toString())
})

child.on('exit',(code)=>{
    console.log('process exited successfully!!!')
})