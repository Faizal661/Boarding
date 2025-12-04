import TimerComponent from "../components/Practicals/TimerComponent";
import ParentComponent from "../components/Practicals/childToParent";
import { ContextProvider } from "../components/Practicals/ContextProvider";
import ReRenderOnReSize from "../components/Practicals/ReRenderOnReSize";
import ToggleChceckbox from "../components/Practicals/ToggleChceckbox";

// import CommentSection from "../components/Practicals/CommentSection";
// import XssDemo from "../components/Practicals/XssDemo";

const Practicals = () => {
  return (
    <>
      <TimerComponent />
      <ContextProvider/>
      <ParentComponent />
      <ReRenderOnReSize/>
      <ToggleChceckbox />
      {/* <CommentSection /> */}
      {/* <XssDemo /> */}
    </>
  );
};

export default Practicals;
