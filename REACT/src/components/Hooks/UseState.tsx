import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div style={{ padding: "10px", border: "1px solid", margin: "2px" }}>
      <h1>use State</h1>
      <div style={{ display: "flex", padding: "5px" }}>
        <MeraButton count={count} onClick={handleClick} />
        <MeraButton count={count} onClick={handleClick} />
      </div>
    </div>
  );
};

export default UseState;

function MeraButton({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) {
  const [internalCount, setInternalCount] = useState(0);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "5px",
        marginLeft: "10px",
        paddingLeft: "15px",
      }}
    >
      <h1>Global Count</h1>
      <div>
        <span style={{ backgroundColor: "yellow" }}>{count}</span>
      </div>
      <button
        style={{ border: "2px solid black", padding: "2px" }}
        onClick={onClick}
      >
        Global Click
      </button>
      <h1>Internal Count</h1>
      <div>
        <span style={{ backgroundColor: "lime" }}>{internalCount}</span>
      </div>
      <button
        style={{ border: "2px solid black", padding: "2px" }}
        onClick={() => setInternalCount(internalCount + 1)}
      >
        Inside Click
      </button>
    </div>
  );
}
