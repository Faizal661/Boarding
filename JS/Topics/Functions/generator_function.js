// Declared with function*, these can pause execution using the yield keyword and resume later

function* counter(){
    let count=0
    while(count<5){
        yield count++
    }
}

const c=counter()

console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)