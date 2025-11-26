import { useMemo, useState } from "react"

const UseMemo = () => {
  const [count1,setCount1]=useState(0)
  const [count2,setCount2]=useState(0)

  const memoized=useMemo(()=>{
    console.log("memoized function worked");
    return count1*100/363
  },[count1])

  const nonMemoized=(()=> {
    console.log("unmemoized function worked");
    return count1*100/363
  })()

  console.log("renrenderd")
  

  return (
    <div>
      <p onClick={()=>setCount1(c => c+1)}>Count1 {count1}</p>
      <p onClick={()=>setCount2(c => c+1)}>Count2 {count2}</p>

      <p>Memoized count {memoized}</p>
      <p>nonMemoized count {nonMemoized}</p>
    </div>
  )
}

export default UseMemo