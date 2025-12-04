import { useState } from "react";

const ReRenderOnReSize = () => {
  const [size, setSize] = useState({
    x: window.innerHeight,
    y: window.innerWidth,
  });

  window.onresize = () => {
    setSize({
      x: window.innerHeight,
      y: window.innerWidth,
    });
  };

  return (
    <div className="border-2 p-4 m-4">
      <h1>RESIZE .. window.onresize()</h1>
      <p>height : {size.x}</p>
      <p>width : {size.y}</p>
    </div>
  );
};

export default ReRenderOnReSize;
