import './App.css';
import React from 'react';
import Home from './components/Home';
import DetailList from './components/DetailList';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPassword from './components/SearchPassword';
import Profile from './components/Profile';
import Setting from './components/Setting';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<DetailList/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/searchPassword' element={<SearchPassword/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
