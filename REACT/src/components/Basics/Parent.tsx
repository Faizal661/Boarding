import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("faizal");
  const [message,setMessage]= useState('good morning !!!')
  const [theme,setTheme]=useState('')

  function toggleTheme(color:string){
    setTheme(color)
  }

  return (
    <div className="border-2 p-4 m-4" style={{backgroundColor:`${theme}`}}>
      <Child name={name} message={message} onClick={()=>{
        setName(prev=>prev+'a')
        setMessage(prev=>prev+'b')
      }}
      changeTheme={toggleTheme}
      />
    </div>
  );
};

export default Parent;
