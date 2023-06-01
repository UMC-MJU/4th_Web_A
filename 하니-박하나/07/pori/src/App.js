import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import Randing from './pages/Randing';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/' element={<Randing />}/>
    </Routes>
    </div>
  );
}

export default App;
