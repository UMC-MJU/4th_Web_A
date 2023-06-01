import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import TodoDetail from "./components/TodoDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<TodoDetail />}></Route>
    </Routes>
  );
};

export default App;
