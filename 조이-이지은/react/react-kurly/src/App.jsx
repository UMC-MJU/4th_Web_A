import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Egg from "./components/pages/Egg";
import Heart from "./components/pages/Heart";
import Cart from "./components/pages/Cart";
import store from "./redux/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
