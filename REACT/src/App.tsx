/* eslint-disable @typescript-eslint/no-unused-vars */

import CommentSection from "./components/CommentSection";
import ParentComponent from "./components/childToParent";
import ToggleChceckbox from "./components/ToggleChceckbox";
import XssDemo from "./components/XssDemo";
import HOC from "./components/HOC";

function App() {
  return (
    <>
      {/* <CommentSection /> */}
      {/* <ParentComponent /> */}
      {/* <ToggleChceckbox /> */}
      {/* <XssDemo/> */}
      <HOC/>
    </>
  );
}

export default App;
