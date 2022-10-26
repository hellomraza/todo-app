import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Signpage from "./pages/Signpage";

function App() {
  return (
    <Routes>
      <Route end path="/" element={<HomePage />} />
      <Route end path="/signin" element={<Signpage />} />
      <Route end path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
