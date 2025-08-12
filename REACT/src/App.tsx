// import CommentSection from "./components/CommentSection";
import ParentComponent from "./components/childToParent";
import ToggleChceckbox from "./components/ToggleChceckbox";

function App() {
  return (
    <>
      {/* <CommentSection /> */}
      <ParentComponent />
      <ToggleChceckbox />
    </>
  );
}

export default App;
