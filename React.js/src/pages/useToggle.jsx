import React, { useCallback, useState } from "react";

function useToggle() {
  const [toggle, setToggle] = useState(false);

  const updateToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return { toggle, updateToggle };
}

export function CustomHook() {
  const { toggle: isLoggesIn, updateToggle: toggleLoggesIn } = useToggle();

  return (
    <div>
      {isLoggesIn ? <p>welcome home </p> : <p>Please log in first!!! </p>}
      <button onClick={toggleLoggesIn}>
        {isLoggesIn ? "log out" : "Login"}{" "}
      </button>
    </div>
  );
}

// export function MenuBarOpen() {
//   const [isMenuOpen, toggleMenu] = useToggle();

//   return (
//     <div>
//       <p>{isMenuOpen ? "Menu Openeedd" : "Menu Closedddd"}</p>
//       <button type="button" onClick={toggleMenu}>Toggle Menu</button>
//     </div>
//   );
// }
