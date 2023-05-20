import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBody from './components/homePage/HomeBody';
import Login from './components/login/Login';
import Register from './components/login/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeBody />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/register" element={<Register />}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
