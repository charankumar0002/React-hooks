import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div >
      <button className="btn-toggle" onClick={toggleTheme}>
        Toggle Dark-Mode
      </button>
      <h1>Hey there! This is just a title</h1>
      <p>
        I am just a boring text, existing here solely for the purpose of this
        demo
      </p>
      <p>
        And I am just another one like the one above me, because two is better
        than having only one
      </p>
    </div>
  );
}

ReactDOM.render(<DarkMode/>, document.getElementById("root"));
export default DarkMode;