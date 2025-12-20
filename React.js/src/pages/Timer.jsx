import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timeRef.current = Date.now() - second;
      intervalRef.current = setInterval(() => {
        setSecond(Date.now() - timeRef.current);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    console.count("rendering...");
  }, [isRunning]);

  return (
    <>
      <p>
        {(second / 1000).toFixed(2)} 
      </p>
      <button onClick={() => setIsRunning(true)}>start</button>
      <button onClick={() => setIsRunning(false)}>pause</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setSecond(0);
        }}
      >
        restart
      </button>
    </>
  );
};

export default Timer;
