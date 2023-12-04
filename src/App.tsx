import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main/Main';
import DetailPage from './pages/Detail/Detail';
import Icondb from './pages/project/icondb';
import Drinkable from './pages/project/drinkable';
import Blocksmith from './pages/project/blocksmith';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/project' element={<DetailPage />} />
      <Route path='/project/icondb' element={<Icondb />} />
      <Route path='/project/drinkable' element={<Drinkable />} />
      <Route path='/project/block-smith' element={<Blocksmith />} />
    </Routes>
  );
}