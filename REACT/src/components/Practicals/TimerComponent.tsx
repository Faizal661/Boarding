/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

const TimerComponent = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeStops, setTimeStops] = useState<number[]>([]);

  const intervalRef = useRef<number>(undefined);
  const startTimeRef = useRef<number>(undefined);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current!);
      }, 10);
    } else {
      setTimeStops((prevStops) => [...prevStops, time]);
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(()=>{
    //only need to render one time during the component mounting
    //b/c previously timestops start with two redundant zero timers like this ['00:00','00:00']
    //so we are calling this to clear the first inserted values  
    setTimeStops([])
  },[])


  return (
    <div className="border-2 p-4 m-4">
      <p>Stop Timer</p>
      <h1 
        style={{ fontSize: "20px", fontWeight: "bolder", paddingLeft: "5px" }}
      >
        {formattedTime(time)}
      </h1>
      <button type="button" onClick={() => setIsRunning((p) => !p)} style={{}}>
        {isRunning ? "STOP" : "START"}
      </button>

      <button
        type="button"
        onClick={() => {
          setIsRunning(false);
          setTime(0);
          setTimeStops([]);
        }}
      >
        Reset
      </button>

      <TimerStops list={timeStops} />
    </div>
  );
};

export default TimerComponent;

const TimerStops = React.memo(({ list }: { list: number[] }) => {
  return (
    <div>
      {list.map((item,index) => {
        return (
          <p key={index}
            style={{ fontSize: "18px", fontWeight: "bold", paddingLeft: "5px" }}
          >
            {formattedTime(item)}
          </p>
        );
      })}
    </div>
  );
});


function formattedTime(time: number) {
  const seconds = Math.floor(time / 1000);
  const ms = Math.floor((time % 1000) / 10);

  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMs = String(ms).padStart(2, "0");

  return `${formattedSeconds}:${formattedMs}`;
}
