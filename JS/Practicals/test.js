// let arr = [[1, 8,[2, [3]], [1, 2]], [1, [2, [3, [5, 6]]]], [[1, [2, [3, [4, [5, [6, [7, [8,]]]]]]]]]]



const input =['/a/:bb/c/:dd','a/:tt/c/:1'];

// output will be = { bb: 'tt', dd: '1' }

function extractPathParams(input){
  let defined= input[0]
  let request= input[1]
 
  defined=defined.split(':')
  request=request.split(':')
  
  let output={}
  output[defined[1].split('/')[0]]=request[1].split('/')[0]
  output[defined[2]]=request[2]
  console.log(output)
}

extractPathParams(input)