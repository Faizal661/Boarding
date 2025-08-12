let limit=6
function factorial(limit){
    let fact=1;
    for (let i=1;i<=limit;i++){
        fact*=i
    }
    return fact;
}
let val=(factorial(limit))
console.log(val.toString());