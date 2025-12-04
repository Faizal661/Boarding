/* eslint-disable prefer-const */
import { createContext, useContext, useState } from "react";

interface IUserData {
  username: string;
  email: string;
}

interface IData {
  userData: IUserData | null;
  updateUserData: (newData: IUserData) => void;
}
const dataContext = createContext<IData | null>(null);

export const ContextProvider = () => {
  const [data, setData] = useState<IUserData | null>(null);

  const updateUserData = (newData: IUserData) => {
    setData(newData);
  };

  const contextValue: IData = {
    userData: data,
    updateUserData,
  };

  return (
    <dataContext.Provider value={contextValue}>
      <ChildComponent />
    </dataContext.Provider>
  );
};

const ChildComponent = () => {
  const context = useContext(dataContext);

  if (!context) {
    throw new Error("child componene tmust be used within context provider");
  }

  let { userData, updateUserData } = context;

  if (userData === null) {
    userData = {
      username: "",
      email: "",
    };
  }

  return (
    <div className="border-2 p-4 m-4">
      <p>Use Context </p>
      name: {userData?.username}
      <br></br>
      email: {userData?.email}
      <br></br>
      <p>update context :</p>
      <input
        type="text"
        value={userData.username}
        placeholder="name"
        onChange={(e) => {
          updateUserData({ email: userData.email , username: e.target.value });
        }}
      />
      <input
        type="text"
        value={userData?.email}
        placeholder="e mail"
        onChange={(e) => {
          updateUserData({ username:userData?.username, email: e.target.value });
        }}
      />
    </div>
  );
};
