import "./App.css";
import Header from "./layout/header";
import HomePage from "./pages/home-page";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/detalis-page";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />

      <Routes>
        <Route path="/" element={<DetailsPage />} />
        <Route path="/details-page" element={<DetailsPage />} />
        <Route path="/details-page/:name" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
