import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Utama from "./Pages/Utama";
import Zoom_in from "./Components/Animasi/Zoom_in";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Utama />} />
        <Route path="/zoomIn" element={<Zoom_in />} />
      </Routes>
    </Router>
  );
}

export default App;
