import { useEffect, useRef, useState } from "react";

function ParentComponent() {
  const [messageFromChild, setMessageFromChild] = useState("");

  const handleChildData = (data: string) => {
    setMessageFromChild(data);
  };

  return (
    <div className="border-2 p-4 m-4 ">
      <h1>Parent Component</h1>
      <p className="bg-red-400 w-fit"> {messageFromChild}</p>
      <ChildComponent onDataSend={handleChildData} />
    </div>
  );
}

export default ParentComponent;

function ChildComponent({ onDataSend }: { onDataSend: (str: string) => void }) {
  const [dataToSend, setDataToSend] = useState("");

  const sendData = () => {
    onDataSend(dataToSend);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    if (inputRef.current) {
      inputRef.current.focus();
    }
  },[])

  return (
    <div className="text-center">
      <h3>Child Component</h3>
      <input
        type="text"
        ref={inputRef}
        className="bg-amber-100 rounded-md me-2"
        value={dataToSend}
        onChange={(e) => setDataToSend(e.target.value)}
      />
      <button onClick={sendData} className="bg-slate-500 rounded-sm">Send to Parent</button>
    </div>
  );
}

