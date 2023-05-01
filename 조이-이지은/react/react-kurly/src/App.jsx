import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Egg from "./components/pages/Egg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/egg" element={<Egg />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
