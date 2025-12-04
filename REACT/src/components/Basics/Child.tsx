import { useState } from "react";

const Child = (props: {
  name: string;
  message: string;
  onClick: () => void;
  changeTheme: (color: string) => void;
}) => {
  const [theme, toggleTheme] = useState(false);
  const [color, setThemeColor] = useState("white");

  const colorArray=["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow","AliceBlue", "AntiqueWhite", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Brown", "CadetBlue", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "DarkBlue", "DarkCyan", "DarkGray ", "DarkGreen", "DarkMagenta", "DarkOrange", "DarkRed", "DeepPink", "DodgerBlue", "FireBrick", "ForestGreen", "Gold", "HotPink", "IndianRed", "Ivory", "Lavender", "LightBlue", "LightCoral", "LightGray ", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSteelBlue", "Magenta", "MediumSeaGreen", "MistyRose", "Orange", "Orchid", "PaleVioletRed", "Pink", "Plum", "Salmon", "SeaGreen", "SkyBlue", "SlateBlue", "SpringGreen", "SteelBlue", "Tomato", "Violet",  "Wheat"]

  function randomTheme(){
    const index=Math.floor(Math.random()*colorArray.length)
    setThemeColor(colorArray[index])
    props.changeTheme(colorArray[index])
  }


  return (
    <div>
      Hello {props.name} ! ,{props.message}
      <br />
      <button onClick={props.onClick}> Click </button>
      <br />
      
      <input
        type="text"
        value={color}
        onChange={(e) => setThemeColor(e.target.value)}
      />
      <button onClick={() => props.changeTheme(color)}> Change theme </button>
      <button onClick={randomTheme}> random theme </button>

      <br />
      toggle theme
      <input
        type="checkbox"
        checked={theme}
        onChange={() => {
          toggleTheme((prev) => !prev);
          props.changeTheme(theme ? "white" : "rgba(0,0,0,.4)");
        }}
      />
    </div>
  );
};

export default Child;
