import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBody from './components/homePage/HomeBody';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Dashboard from './components/dashboard/Dashboard';

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
