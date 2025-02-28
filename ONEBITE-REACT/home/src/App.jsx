import './App.css'
import Home from './components/Home'
import Register from './components/Register';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/homepage' element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
