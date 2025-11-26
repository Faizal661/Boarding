import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count,setCount]=useState(0)
  const prevCountRef=useRef(0)

  useEffect(()=>{
    prevCountRef.current=count
  },[count])

  const prevCount=prevCountRef.current



  const inputRef = useRef<HTMLInputElement>(null);
  const sinputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
    }
    if (sinputRef.current) {
      sinputRef.current.focus(); 
    }
  }, []); 

  return (
    <>
    <div style={{ padding: "10px", border: "1px solid", margin: "2px" }}>
      <h1>use ref</h1>
      <p>count : {count}</p>
      <p>prev Count: {prevCount}</p>
      <button onClick={()=>setCount(count+1)}>ADD</button>
    </div>
    <div style={{ padding: "10px", border: "1px solid", margin: "2px" }}>
      <input type="text" ref={inputRef}  placeholder="first input"/>
      <input type="text" ref={sinputRef}  placeholder="second input"  />
    </div>
    </>
  );
};

export default UseRef;
