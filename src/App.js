import { useState } from 'react';
import Login from './components/Login';
import ListadoProyectos from './components/ListadoProyectos';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
  };

  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={isLoggedIn ? <ListadoProyectos isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
