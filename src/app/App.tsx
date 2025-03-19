'use client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page'; 
import Sermons from './sermons/page';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons" element={<Sermons />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; 