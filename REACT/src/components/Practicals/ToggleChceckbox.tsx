import { useState } from "react";

const ToggleChceckbox = () => {
  const [isChecked, SetIsChecked] = useState(false);
  const [isRadioButtonChecked, SetIsRadioButtonChecked] = useState(false);

  const toggleCheckBox = () => {
    SetIsChecked((prev) => !prev);
  };

  const toggleRadioButton = () => {
    SetIsRadioButtonChecked((prev) => !prev);
  };

  return (
    <div className="p-4 border-2 m-4">
      <div>
        <h1 className="mb-2">Toggle Check Box</h1>
        <input type="checkbox" checked={isChecked} onClick={toggleCheckBox}/>
        <button
          type="button"
          className="ml-5 px-2 bg-amber-400 rounded-md"
          onClick={toggleCheckBox}
        >
          {isChecked ? "Uncheck" : "Check"}
        </button>
      </div>

      <br />
      <hr />
      <br />
      
      <div>
        <h1 className="mb-2">Toggle Radio Button</h1>
        <input type="radio" checked={isRadioButtonChecked} onClick={toggleRadioButton} />
        <button
          type="button"
          className="ml-5 px-2 bg-amber-400 rounded-md"
          onClick={toggleRadioButton}
        >
          {isRadioButtonChecked ? "Uncheck" : "Check"}
        </button>
      </div>
    </div>
  );
};

export default ToggleChceckbox;
