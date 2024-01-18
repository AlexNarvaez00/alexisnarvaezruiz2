import { useEffect, useState } from "react";
import "./DarkButton.css";
import MoonIcon from "./icons/Moon.svg";
import SubIcon from "./icons/Sun.svg";

const isActiveDarkMode = () => {
  return "theme" in window.localStorage && window.localStorage.theme == "dark";
};

export default function DarkButton({ className = "", ...props }) {
  const [darkMode, setDarkMode] = useState(isActiveDarkMode());

  useEffect(() => {
    if (isActiveDarkMode()) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }, []);

  const handleClick = () => {
    setDarkMode((prev) => {
      if (isActiveDarkMode()) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      }
      return !prev;
    });
  };

  return (
    <div
      className={`base-layer-button m-auto ${
        darkMode ? `bg-violet-600` : `bg-violet-400`
      } ${className}`}
      onClick={handleClick}
    >
      <span className={`thumb ${darkMode ? `left-1/2` : `left-0`}`}>
        {darkMode && <img src={MoonIcon.src} className="m-auto" />}
        {!darkMode && <img src={SubIcon.src} className="m-auto" />}
      </span>
    </div>
  );
}
