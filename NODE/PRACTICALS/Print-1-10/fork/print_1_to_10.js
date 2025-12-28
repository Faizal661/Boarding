
let number=1;

let timer=setInterval(()=>{
    // process.send(number)
    console.log(number)

    number++

    if(number===11){
        clearInterval(timer)
        process.exit(0)
    }
},1000)