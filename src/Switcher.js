import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import useDarkSide from "./useDarkSide";

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme == "dark" ? false : true);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
  );
}

export default Switcher;
