import { useState } from "react";

const ToggleChceckbox = () => {
  const [isChecked, SetIsChecked] = useState(false);

  const toggleCheckBox = () => {
    SetIsChecked((prev) => !prev);
  };

  return (
    <div className="p-4 border-2 m-4">
      <div>ToggleChceckbox</div>
      <input type="checkbox" checked={isChecked} />
      <input type="radio" checked={!isChecked} />
      <button
        type="button"
        className="ml-5 px-2 bg-amber-400 rounded-md"
        onClick={toggleCheckBox}
      >
        {isChecked ? "Uncheck" : "Check"}
      </button>
    </div>
  );
};

export default ToggleChceckbox;
