/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [color, setColor] = useState("green");
  const [index, setIndex] = useState(0);
  const colors = ["green", "red", "yellow", "orange", "blue"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
        // setColor('violet')
        return nextIndex;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div style={{ padding: "10px", border: "1px solid", margin: "2px" }}>
        <h1>use Effect</h1>
        <h1 style={{ backgroundColor: color }}>
          {index + 1} : {color}
        </h1>
      </div>
    </>
  );
};

export default UseEffect;
