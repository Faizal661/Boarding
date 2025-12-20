import React, { forwardRef, useRef } from "react";

const ForwardRef = () => {
  const inputRef = useRef();
  function accessInput(){
    inputRef.current.style.backgroundColor='red'
  }
  return (
    <div style={{border:'1px solid red'}}>
      <ChildComponent ref={inputRef} />
      <button onClick={accessInput}>change color</button>
    </div>
  );
};

export default ForwardRef;

const ChildComponent = forwardRef((props, ref) => {
  return <input style={{border:'1px solid green'}} type="text" name="" id="" ref={ref} />;
});
