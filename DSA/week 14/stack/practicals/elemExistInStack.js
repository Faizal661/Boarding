//program to check if an element exist or not in a stack

class Stack{
    constructor(){
        this.items=[]
    }
    add(val){
        this.items.push(val)
    }
    
    remove(){
        return this.items.pop()
    }
    
    display(){
        console.log(this.items)
    }
    
    check(val){
        this.secondArr=[]
        let found=false
        
        while(this.items.length){
            let item=this.remove()
            this.secondArr.push(item)
            if(item===val){
                found=true
                break;
            }
        }
        while(this.secondArr.length){
            let item=this.secondArr.pop()
            this.items.push(item)
        }
        if(found){
            console.log('value found')
        }else{
            console.log('value not found')
        }
    }
}

const stck=new Stack()
stck.add(1)
stck.add(2)
stck.add(3)
stck.add(4)
stck.add(5)

stck.display()
stck.check(2)
stck.display()
stck.check(8)
stck.display()

