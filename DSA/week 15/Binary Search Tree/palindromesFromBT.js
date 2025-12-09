//palindrome numbers from an bt

class Node{
    constructor(val){
    this.val=val
    this.left=null
    this.right=null
    }
}
class BinaryTree{
    constructor(){
        this.root=null
    }
    
    insert(val){
        let newNode=new Node(val)
        if(!this.root){
            this.root=newNode
            return
        }
        let curr=this.root
        while(true){
            if(val<curr.val){
                if(!curr.left){
                    curr.left=newNode
                    break
                }else{
                    curr=curr.left
                }
            }else{
                if(!curr.right){
                    curr.right=newNode
                    break
                }else{
                    curr=curr.right
                }
            }
        }
    }
    
    isPalindrome(node){
        if(node){
            let val=node.val;
            let rev=0;
            while(val){
                let rem=val%10
                val=Math.floor(val/10)
                rev=rev*10+rem
            }
            if(rev===node.val) {
                console.log(`${node.val} is palindrome`)
            }else{
                console.log(`${node.val} is not a palindrome`)
            }
            
            
            this.isPalindrome(node.left)
            this.isPalindrome(node.right)
        }
    }
    
    palindromes(){
        if(!this.root){
            return []
        }
        this.isPalindrome(this.root)
    }
    
   
}


let BT=new BinaryTree()
BT.insert(121)
BT.insert(234)
BT.insert(567)
BT.insert(78934)
BT.insert(1234321)
BT.palindromes()
