import React from "react";
import "./index.scss";
const Header = ({ isDarkMode, setIsDarkMode }) => {
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header id="header">
      <div className="logo">
        <h1>Where in the world?</h1>
      </div>
      <div>
      <i className="fa-regular fa-moon"></i>
        <button onClick={() => handleDarkMode()} className="dark-mode-btn">
          {" "}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
