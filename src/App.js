import { useState } from 'react';
import Login from './components/Login';
import ListadoProyectos from './components/ListadoProyectos';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";

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
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <ListadoProyectos isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />  
      {/*   <Route path="/Login" element={<Login onLogin={handleLogin}/>}/>
        <Route path="/LISTADO" element={isLoggedIn ? <ListadoProyectos isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : <Login onLogin={handleLogin}/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
