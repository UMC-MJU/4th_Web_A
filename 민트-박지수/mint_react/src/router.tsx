import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Page404 from './pages/page404/Page404';

// const Home = React.lazy(() => import('./pages/home/Home'));
// const Page404 = React.lazy(() => import('./pages/page404/Page404'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
