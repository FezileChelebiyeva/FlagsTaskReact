import "./App.scss";
import Header from "./layout/header";
import HomePage from "./pages/home-page";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/detalis-page";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={!isDarkMode ? "App" : "Dark"}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details-page/:name" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
