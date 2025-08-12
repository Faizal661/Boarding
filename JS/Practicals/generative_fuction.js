function* multipletable(item){
    let i=1
    while(i<5){
        yield item*i++
    }
}

const table=multipletable(5)
console.log(table.next().value)
console.log(table.next().value)
console.log(table.next().done)
console.log(table.next().value)
console.log(table.next().value)
console.log(table.next().done)