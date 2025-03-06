import './App.css'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
