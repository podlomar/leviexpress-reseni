import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
