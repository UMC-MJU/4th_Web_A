import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Concert from './pages/Concert';
import Header from './pages/Header';
import Login from './pages/Login';
import TodoList from './todo/TodoList';


const App = () => {   
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="concert" element={<Concert />}>
        <Route path=":usertitle" element={<Concert />} />
        </Route>
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='todo' element={<TodoList/>}/>
    </Routes>
  );  
  
}

export default App;
