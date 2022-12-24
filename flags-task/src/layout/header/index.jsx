import React from "react";
import "./index.scss";
import logoDarkMode from "../../assets/images/Path.svg";
const Header = () => {
  const handleDarkMode = () => {
    console.log("salam");
  };
  return (
    <header id="header">
      <div className="logo">
        <h1>Where in the world?</h1>
      </div>
      <div>
        <img className="logo-dark-mode" src={logoDarkMode} alt="darkmode" />
        <button onClick={() => handleDarkMode()} className="dark-mode-btn">
          {" "}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
