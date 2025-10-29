import { useState } from "react";

function ParentComponent() {
  const [message, setMessage] = useState("");

  const handleChildData = (data: string) => {
    setMessage(data);
  };

  return (
    <div className="border-2 p-4 m-4 ">
      <h1>Parent Component</h1>
      <p className="bg-red-400 w-fit"> {message}</p>
      <ChildComponent onDataSend={handleChildData} />
    </div>
  );
}

export default ParentComponent;

function ChildComponent({ onDataSend }: { onDataSend: (str: string) => void }) {
  const [message, setMessage] = useState("");

  const sendData = () => {
    onDataSend(message);
  };

  return (
    <div className="text-center">
      <h3>Child Component</h3>
      <input
        type="text"
        className="bg-amber-100 rounded-md me-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendData} className="bg-slate-500 rounded-sm">Send to Parent</button>
    </div>
  );
}

