import './App.css';
import React from 'react';
import Home from './components/Home';
import DetailList from './components/DetailList';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPassword from './components/SearchPassword';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:id' element={<DetailList/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/searchPassword' element={<SearchPassword/>}/>
      </Routes>
    </Router>
  )
}

export default App;
