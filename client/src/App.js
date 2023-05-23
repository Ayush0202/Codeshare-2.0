import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBody from './components/HomePage/HomeBody';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeBody />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/codes" element={<Dashboard />}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
